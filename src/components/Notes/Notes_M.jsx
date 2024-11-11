import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes_M.css";
import enter_btn from '../../assets/enter_btn.png'
import back_btn from "../../assets/back_btn.png";
import notes_main_bg_img from "../../assets/notes_main_bg_img.png";
import Notes_MContent from "../Notes_Content/Notes_MContent";
import UseContext from "../../useContext";

function Notes_M() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();
  const { notes, setNotes, selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    
    let initials = "";
    let selectedTitle = "";

    if (selectedGroup) {
      const words = selectedGroup.name.split(" ");
      if (words.length === 1) {
        initials = words[0].slice(0, 2).toUpperCase();
      } else if (words.length === 2) {
        initials = words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
      } else if (words.length > 2) {
        initials = words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
      }

      selectedTitle = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    setBgColor(selectedGroup ? selectedGroup.color : "#fff");
    setInitials(initials);
    setSelectedTitle(selectedTitle);
  }, [selected, setNotes, setSelected]); //remove setSelected if nt working

  const handleKeyDown = (e) => {
    if (e.key === "Send" ) {
      e.preventDefault();
      handleSaveNotes();
    }
    else if(e.key === "Enter"){
      setText((prevText) => prevText + "\n");
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleSaveNotes = (e) => {
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
      date: formatCurrentDate(),
      time: formatCurrentTime(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const formatCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const ampm = now.getHours() >= 12 ? "Pm" : "Am";
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString();
  const monthIndex = now.getMonth();
  const year = now.getFullYear().toString();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[monthIndex];
  return `${day} ${month} ${year}`;
};

  const goBack = () => {
    setSelected("");
    navigate("/");
  };

  return (
    <div className="m_notes_page">
      <div className="m_notes_content_title">
        <img src={back_btn} alt="back_btn" onClick={goBack} />
        <div
          className="m_notes_content_title_color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="m_notes_content_title_text">
          {selectedTitle}
        </div>
      </div>
      <div className="m_notes_page_body">
        {notes.length === 0 ? (
          <div
            className="m_notes_page_body_empty"
            style={{ backgroundImage: `url(${notes_main_bg_img})` }}
          ></div>
        ) : (
          <div>
            {notes.map((note, index) => (
              <Notes_MContent key={index} note={note} />
            ))}
          </div>
        )}
      </div>
      <div className="m_notes_input">
        <textarea
          value={text}
          placeholder="Enter your text here..........."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter_btn} alt="enter_btn" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default Notes_M;
