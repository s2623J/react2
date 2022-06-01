import React, {useState} from "react";
import ItemDescription from "./ItemDescription";
import ItemDescriptionClassVersion from "./ItemDescriptionClassVersion";

function Product(props) {
    // const [name, setCount] = useState(props.name); // This forces state
    // const [description, setCount] = useState(props.description); // This forces state
    // const [price, setCount] = useState(props.price); // This forces state

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h3>${props.price}</h3>
            <hr />
            {/* <ItemDescription
                name="Bob"
                description="New Item"
                price={56.00} // Numbers require JSX curly braces */}
            <ItemDescriptionClassVersion
                name="Bob"
                description="Old Item"
                price={56.00} // Numbers require JSX curly braces
            />
        </div>
    );
}


export default Product;
