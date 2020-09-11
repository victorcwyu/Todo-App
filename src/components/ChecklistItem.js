import React, { useState } from "react";
import "../styles/ChecklistItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import EditChecklistItem from "./EditChecklistItem";

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
          icon={faEdit}
          onClick={() => props.editItem(props.itemNumber)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteItem(props.itemNumber)}
        />
        <EditChecklistItem
          // item={props.item}
          title={props.title}
          onChange={props.onChange}
          // onKeyPress={props.onKeyPress}
          // onClick={props.onClick}
          // value={props.value}
        />
      </li>
    </div>
  );
}

export default ChecklistItem;

//NEWER CODE
// import React, { useState } from "react";
// import "../styles/ChecklistItem.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// function ChecklistItem(props) {
//   // const [checked, setChecked] = useState(props.done);

//   // const handleChange = () => {
//   //   if (checked === false) {
//   //     setChecked(true);
//   //   } else setChecked(false);
//   // };

//   return (
//     <li key={props.key}>
//       <input
//         type="checkbox"
//         checked={props.done}
//         onChange={props.completeItem}
//       />
//       {props.done === false ? (
//         <h2>{props.title}</h2>
//       ) : (
//         <h2>Checked off the list!</h2>
//       )}
//       <FontAwesomeIcon icon={faTrash} />
//     </li>
//   );
// }

// export default ChecklistItem;
