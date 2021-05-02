import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
          // Props example
    <div className="App">
      <User userName='Shane Parkes' tweet='I am learning React!'/>
      <User userName='Spider-Man' tweet='With great power comes great responsibility.'/>
      <User userName='Wolverine' tweet='Nice job, bub!'/>
      <User userName='Yoda' tweet='My apprentice, well done.'/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
