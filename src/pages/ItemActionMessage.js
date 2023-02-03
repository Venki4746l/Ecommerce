import React from "react";
import "./ItemAction.css";
const ItemActionMessage = (props) => {
  const [actionType, itemName, quantity] = props.itemActionDetails;
  return (
    <div className="itemMessageContainer">
      <div className="ItemMessageContent">
        {actionType !== "Deleted" ? (
          <p>
            <i className="fa fa-check"></i> You've changed "{itemName}" QUANTITY
            to "{quantity}"
          </p>
        ) : (
          <p>
            <i className="fa fa-check"></i> Successfully removed "{itemName}"
            from your cart
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemActionMessage;
