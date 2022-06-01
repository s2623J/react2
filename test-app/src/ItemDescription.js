import React from "react";
// import PropTypes from "prop-types";

function ItemDescription({ name, description, price }) {
    return (
        <div>
            <p>ItemDescription</p>
            <p>{name}</p>
            <p><i>{description}</i></p>
            <p>${price}</p>
        </div>
    );
}

// ItemDescription.propTypes = {};

export default ItemDescription;
