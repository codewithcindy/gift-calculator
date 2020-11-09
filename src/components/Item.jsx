import React from "react";

function Item(props) {
    return (
        <div class="item-box">
            <p class="item-text">{props.itemName}</p>
            <p class="item-text">{props.itemPrice}</p>
        </div>        
    );
}

export default Item;