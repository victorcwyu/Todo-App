import React, { useState } from "react";
import "../styles/CreateChecklistItem.scss";

function EditChecklistItem(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <div className="editChecklistItemContainer">
      <div className="editItemInput">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          // onKeyPress={props.onKeyPress}
        ></input>
        {/* <button
          name="editItem"
          className="saveButton"
          type="button"
          onClick={props.onClick}
        >
          Save changes
        </button> */}
      </div>
    </div>
  );
}

export default EditChecklistItem;
