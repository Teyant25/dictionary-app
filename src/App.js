import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
          <footer className="text-center">
            <small> Coded by Tya Kent</small>{" "}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
