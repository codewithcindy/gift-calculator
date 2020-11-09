import React from "react";

function Total() {

    const [itemsTotal, setItemsTotal] = React.useState(0.00);

    

    return (
        <div class="total-box">
            <p>Total: ${itemsTotal}</p>
        </div>
    );
}

export default Total;