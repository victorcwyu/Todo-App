import React, { useState } from "react";
import "../styles/Checklist.scss";
import CreateChecklistItem from "./CreateChecklistItem";
import ChecklistItem from "./ChecklistItem";
import Swal from "sweetalert2";

function Checklist() {
  const [item, setItem] = useState({ title: "", done: false });
  let [listArr, setListArr] = useState([]);

  let checklist = localStorage.hasOwnProperty("checklist")
    ? JSON.parse(localStorage.getItem("checklist"))
    : [];

  const onChange = (e) => {
    let { value } = e.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setItem(obj);
  };

  const createItem = (e) => {
    console.log(item, listArr);
    const { name } = e.target;
    if (e.key === "Enter" || name === "addItem") {
      if (item.title !== "") {
        checklist.unshift(item);
        localStorage.setItem("checklist", JSON.stringify(checklist));
        setItem({ title: "", done: false });
      } else {
        Swal.fire("Oops...", "Something went wrong!", "error");
      }
    }
  };

  let usableListArr =
    listArr.length > 0
      ? listArr
      : JSON.parse(localStorage.getItem("checklist"));

  return (
    <div className="checklistContainer">
      <h1>Checklist</h1>
      <CreateChecklistItem
        onChange={onChange}
        onClick={createItem}
        item={item}
        onKeyPress={createItem}
        value={item.title}
      />
      <ul>
        {usableListArr && usableListArr.length > 0
          ? usableListArr.map((el, i) => (
              <ChecklistItem key={i} title={el.title} done={el.done} />
            ))
          : null}
      </ul>
    </div>
  );
}

export default Checklist;
