import React from "react";

function InputForm(props) {

    const [newItem, setNewItem] = React.useState({
        item: "",
        price: ""
    });

    function handleChange(event) {

        const {name, value} = event.target;

        setNewItem((prevValues) => {
            return {
                ...prevValues,
                [name] : value
            }
        });
        
    }

    function submitItem(event) {

        props.onAdd(newItem);
        event.preventDefault();
        setNewItem({
            item: "",
            price: ""
        });
    }

    return (
        <form class="input-form">
            <label for="item">Name of item:</label>
            <input type="text" autocomplete="off" onChange={handleChange} name="item" value={newItem.item}></input>
            <label for="price">Cost of item:</label>
            <input type="number" autocomplete="off" onChange={handleChange} name="price" value={newItem.price}></input>
            <button type="submit" onClick={submitItem}>Add item</button>
        </form>
    );
}

export default InputForm;