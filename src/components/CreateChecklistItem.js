import React from "react";
import "../styles/CreateChecklistItem.scss";

function CreateChecklistItem(props) {
  return (
    <div className="createChecklistItemContainer">
      <h2>Add a new checklist item</h2>
      <div className="newItemInput">
        <input
          type="text"
          placeholder="write a new item"
          item={props.item}
          value={props.value}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        ></input>
        <button
          name="addItem"
          className="addButton"
          type="button"
          onClick={props.onClick}
        >
          Add item
        </button>
      </div>
    </div>
  );
}

export default CreateChecklistItem;
