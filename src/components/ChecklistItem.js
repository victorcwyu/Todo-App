import React, { useState } from "react";
import "../styles/ChecklistItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ChecklistItem(props) {
  const [checked, setChecked] = useState(props.done);

  const handleChange = () => {
    if (checked === false) {
      setChecked(true);
    } else setChecked(false);
  };

  return (
    <div className="checklistItemContainer">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {checked === false ? (
        <h2>{props.title}</h2>
      ) : (
        <h2>Checked off the list!</h2>
      )}
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
}

export default ChecklistItem;
