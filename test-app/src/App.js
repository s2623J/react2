import "./App.css";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionalComponent from "./FunctionalComponent";
import Header from "./Header";

// BEM Block Element Modifier


function App() {
    const name = 'Helen';
    const isMale = false;

    function getGreeting(username = null) {
        if (!!username) {
            return <h1>Hello, {username}!</h1>
        } else {
            return <h1>Hello Stranger</h1>
        }
    }

    return (
        <div className="app">
            <Header/>
            <h3 className="app__title">Hello World!</h3>
            <span className="app__title--large">{getGreeting(name)}</span>
            <span className="app__title--small">You are {isMale ? 'male' : 'female'}</span>
            <ClassBasedComponent/>
            <FunctionalComponent/>
        </div>
    );
}

export default App;
