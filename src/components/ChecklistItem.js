import React from "react";
import "../styles/ChecklistItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ChecklistItem(props) {
  return (
    <div className="checklistItemContainer">
      <li>
        <input
          type="checkbox"
          checked={props.done}
          onChange={() => props.completeItem(props.itemNumber)}
        />
        {props.done === false ? (
          <h2>{props.title}</h2>
        ) : (
          <h2>Checked off the list!</h2>
        )}
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteItem(props.itemNumber)}
        />
      </li>
    </div>
  );
}

export default ChecklistItem;
