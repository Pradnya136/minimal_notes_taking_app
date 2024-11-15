/* eslint-disable react/prop-types */
import "./Notes_MContent.css";

function Notes_MContent({ note }) {
  return (
    <div className="m_notes_content_body">
            <div className="m_notes_content_details">
        {note.content.split("\n").map((line,index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="m_notes_content_date_time_details">
        <div className="m_notes_content_date">{note.date} &#8194;&#8194;<span>&#8226;</span></div>
        <div className="m_notes_content_time">{note.time}</div>
      </div>

    </div>
  );
}

export default Notes_MContent;
