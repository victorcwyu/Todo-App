import React from "react";
import "../styles/Checklist.scss";
import CreateChecklistItem from "./CreateChecklistItem";
import ChecklistItem from "./ChecklistItem";

function Checklist() {
  return (
    <div className="checklistContainer">
      <h1>Checklist</h1>
      <CreateChecklistItem />
      <ChecklistItem />
    </div>
  );
}

export default Checklist;
