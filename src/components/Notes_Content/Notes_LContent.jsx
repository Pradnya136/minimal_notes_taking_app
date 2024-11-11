/* eslint-disable react/prop-types */

import "./Notes_LContent.css";

 
function Notes_LContent({ note }) {
  
  return (
    <div className="notes_content_note">
     <div className="notes_content_details">
        {note.content}
      </div>
      <div className="notes_content_date_time_details">
      <div className="notes_content_date">{note.date}  &#8194;&#8194;<span>&#8226;</span></div>
      <div className="notes_content_time">{note.time}</div>
       
      </div>
    </div>
  );
}

export default Notes_LContent;
