import { useState, useEffect, useRef } from "react";
import "./Mobile.css";
import Creating_Notes_M from "./components/Creating_Notes/Creating_Notes_M";
import Notes_MTitle from "./components/Notes_Title/Notes_MTitle";
import add_btn_img from "./assets/add_btn_img.png"

function Mobile() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return() =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showPopup]);

  return (
    <div className="mobile_sidebar">
      <div className="mobile_sidebar_title">Pocket Notes</div>

      <div className="mobile_sidebar_notes_title">
        {(
          titles.map((title, index) => (
            <Notes_MTitle
              title={title}
              key={index}
            />
          ))
        )}
      </div>
      {showPopup && (
        <div className="mobile_popup_overlay">
        <div ref={popupRef}>
            <Creating_Notes_M
              groupNamesParent={groupNamesParent}
              setGroupNamesParent={setGroupNamesParent}
              onClose={handleClose}
            />
            </div>
        </div>
      )}
          <div className="User_group_create_notes_btn">
 
 <img className="add_btn" id="add" src={add_btn_img} onClick={handleClick} alt="add-btn" />


</div>
    </div>
  );
}

export default Mobile;
