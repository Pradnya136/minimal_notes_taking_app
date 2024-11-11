/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import "./Notes_L.css";
import enter_btn from '../../assets/enter_btn.png'
import Notes_LContent from "../Notes_Content/Notes_LContent";
import UseContext from "../../useContext";

function Notes_L() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const { notes, setNotes, selected } = UseContext();

  useEffect(() => {
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
   }, [selected, setNotes]);


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveNotes();
    }
    else if(e.key === "Enter" && e.shiftKey){
      setText((prevText) => prevText + "\n");
    }
  };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      
      title: selected,
      content: text,
      date: formatCurrentDate(),
      time: formatCurrentTime(),
      id: Date.now(),
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
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString();
  const monthIndex = now.getMonth();
  const year = now.getFullYear().toString();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[monthIndex];
  return `${day} ${month} ${year}`;
};

  return (
    <div className="notes">
      <div className="notes_title">
        <div
          className="notes_title_color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="notes_title_text">{selectedTitle}</div>
      </div>
      <div className="notes_content">
  {notes && notes.length > 0
    ? notes.map((note, index) => (
        <Notes_LContent
          key={index}
          note={{
            ...note,
            content: note.content.split('\n').map((line) => (
              <>
                {line}
                <br />
              </>
            )),
          }}
        />
      ))
    : null}
</div>
      <div className="notes_input">
        <textarea
          value={text}
          placeholder="  Enter your text here........."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter_btn} alt="enter_btn" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default Notes_L;
