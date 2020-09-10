import React, { useState } from "react";
import "../styles/ChecklistItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ChecklistItem(props) {
  const [checked, setChecked] = useState("");

  const handleChange = () => {
    if (checked === "") {
      setChecked("checked");
    } else setChecked("");
  };

  return (
    <div className="checklistItemContainer">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {checked === "" ? <h2>{props.title}</h2> : <h2>Checked off the list!</h2>}
      {/* <input type="checkbox" />
      <h2>{props.title}</h2> */}
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
}

export default ChecklistItem;
