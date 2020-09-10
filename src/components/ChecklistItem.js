import React, { useState } from "react";
import "../styles/ChecklistItem.scss";

function ChecklistItem() {
  const [checked, setChecked] = useState("");

  const handleChange = () => {
    if (checked === "") {
      setChecked("checked");
    } else setChecked("");
  };

  return (
    <div className="checklistItemContainer">
      <input type="checkbox" checked={checked} onChange={handleChange}></input>
      {checked === "" ? <h2>To do!</h2> : <h2>Checked off the list!</h2>}
    </div>
  );
}

export default ChecklistItem;
