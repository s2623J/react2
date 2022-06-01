import "./App.css";

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
            <h1>{getGreeting(name)}</h1>
            <h2>You are {isMale ? 'male' : 'female'}</h2>
        </div>
    );
}

export default App;
