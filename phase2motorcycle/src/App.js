import logo from './logo.svg';
import './App.css';

function App() {

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': '2b044b5f8cmsha7ad0e067904daap19f1f4jsn4a021c1e8df7'
    }
  };
  
  fetch('https://motorcycle-specs-database.p.rapidapi.com/article/2020/Yamaha/YZF%20R15', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  return (
    <div className="App">
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
