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

  listArr =
    listArr.length > 0
      ? listArr
      : JSON.parse(localStorage.getItem("checklist"));

  const completeItem = (i) => {
    if (checklist[i]["done"] !== true) {
      checklist[i]["done"] = true;
      localStorage.setItem("checklist", JSON.stringify(checklist));
      setListArr(checklist);
      Swal.fire("Sweet!", "Checklist item completed!", "success");
    } else {
      checklist[i]["done"] = false;
      localStorage.setItem("checklist", JSON.stringify(checklist));
      setListArr(checklist);
      Swal.fire(
        "Uh oh!",
        `You've added "${checklist[i]["title"]}" back to the checklist!`,
        "warning"
      );
    }
  };

  const deleteItem = (i) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You're about to delete "${checklist[i]["title"]}" from the checklist!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#219e4a",
      cancelButtonColor: "#ce2232",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          `You've deleted "${checklist[i]["title"]}" from the checklist!`,
          "success"
        );
      }
    });
  };

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
        {listArr && listArr.length > 0
          ? listArr.map((el, i) => {
              return (
                <ChecklistItem
                  key={i}
                  itemNumber={i}
                  title={el.title}
                  done={el.done}
                  completeItem={completeItem}
                  deleteItem={deleteItem}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Checklist;
