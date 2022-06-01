import React, { Component } from "react";

export class ClassBasedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:  0
        }
    }
    increment = () => {
        // setCount(count + 1);
        this.setState({
            count:  this.state.count + 1
        })
    }
    decrement = (msg = null) => {
        // (!!msg) ? console.log(msg) : console.log('');
        // setCount(count - 1);
        this.setState({
            count:  this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to the Class-Based Component</h1>
                <p>The count is: {this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default ClassBasedComponent;
