import logo from "../logo.svg";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home Page</p>
        <a href="./address">SignUpAddress page</a>
        <a href="./phone">SignUpPhone page</a>
        <a href="./query">QueryPhone page</a>
        <a href="./reg">RegBeenPlace page</a>
        <a href="./home">Home page</a>
      </header>
    </div>
  );
}

export default App;
