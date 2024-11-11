import { useEffect, useState, useRef } from "react";
import "./user_group.css";
import Creating_Notes_L from "../Creating_Notes/Creating_Notes_L";
import Notes_LTitle from "../Notes_Title/Notes_LTitle";
import add_btn_img from "../../assets/add_btn_img.png";

function User_group() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    JSON.parse(localStorage.getItem("groupNames")) || []
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="User_group">
      <div className="User_group_title"><h2 className="headline">Pocket Notes</h2></div>

      <div className="User_group_notes_title scrollable">
        {titles.length > 0 ? (
          titles.map((title, index) => <Notes_LTitle key={index} title={title} />)
        ) : (
          <div>No groups available</div>
        )}
      </div>
      {showPopup && (
        <div className="popup_overlay">
          <div ref={popupRef}>
            <Creating_Notes_L
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

export default User_group;
