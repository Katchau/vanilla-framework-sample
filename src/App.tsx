import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Coiso
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
      <section className='p-strip is-shallow'>
        <div className='row'>
          Coiso
        </div>
      </section>
    </main>
  );
}

export default App;