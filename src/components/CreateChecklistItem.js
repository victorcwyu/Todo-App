import React from "react";
import "../styles/CreateChecklistItem.scss";

function CreateChecklistItem() {
  return (
    <div className="createChecklistItemContainer">
      <h2>Add a new checklist item</h2>
      <div className="newItemInput">
        <input type="text" placeholder="write a new item"></input>
        <button className="addButton" type="button">
          Add item
        </button>
      </div>
    </div>
  );
}

export default CreateChecklistItem;
