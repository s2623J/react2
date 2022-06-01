import React, { Component } from "react";

export class ItemDescriptionClassVersion extends Component {
    render() {
        const { name, description, price } = this.props;
        return (
            <div>
                <div>ItemDescriptionClassVersion</div>
                <p>ItemDescription</p>
                <p>{name}</p>
                <p>
                    <i>{description}</i>
                </p>
                <p>${price}</p>
            </div>
        );
    }
}

export default ItemDescriptionClassVersion;
