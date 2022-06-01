import "./App.css";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionalComponent from "./FunctionalComponent";
import Header from "./Header";
import Product from "./Product";

// BEM Block Element Modifier

function App() {
    const name = "Helen";
    const isMale = false;

    function getGreeting() {
        return <h1>Hello, {name}!</h1>;
    }

    return (
        <div className="app">
            <Header />
            <h3 className="app__title">Hello World!</h3>
            <span className="app__title--large">{getGreeting()}</span>
            <span className="app__title--small">
                You are {isMale ? "male" : "female"}
            </span>
            <ClassBasedComponent />
            <FunctionalComponent />
            <Product 
                name="Amazon Echo"
                description="Your AI assistant"
                price={59.99} // Numbers require JSX curly braces
            />
        </div>
    );
}

export default App;
