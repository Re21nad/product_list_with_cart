// import logo from './logo.svg';
import Pictures from './components/Pictures';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

      <div class="container">
        <div class='row mt-5'>

          {/* For Products */}
          <div class= 'col sm-6'>
          <h1 class="text-right fw-bold">Desserts</h1>
            <div class='row mt-5'>
              <div class= 'col sm-6'>
                <Pictures />
              </div>
            </div>
          </div>

          {/* For Cart */}
          <div class= 'col'>
            <Cart />
          </div>
        </div>
      </div>
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
