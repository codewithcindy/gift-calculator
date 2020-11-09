import React from "react";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";
import InputForm from "./InputForm"
import Total from "./Total";

function App() {

    const [itemsArray, setItemsArray] = React.useState([]);

    function addItem(newItem) {
        setItemsArray( (prevItems) => {
            return [
                ...prevItems,
                newItem
            ]
        });

        console.log(itemsArray);
    }

    return(
        <div>
            <Header />
            <InputForm 
                onAdd={addItem}
            />
            {itemsArray.map((newItem) => {
                return <Item itemName={newItem.item} itemPrice={newItem.price}/>
            })}
            <Total />
            <Footer />
        </div>
    );
}

export default App;