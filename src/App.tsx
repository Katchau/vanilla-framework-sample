import logo from './logo.svg';
import './App.scss';
import React from 'react';

const API_REQUEST = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

class App extends React.Component {
  loading: boolean = false;
  blogData: any[] = [];

  constructor(props: {}) {
    super(props);

    this.loading = true;
    fetch(API_REQUEST)
      .then((response) => {
        response.json().then((data) => {
          this.blogData = data;
          console.log('hmm', data);
        });
      })
      .finally(() => {
        this.loading = false;
      })
  }

  render(): JSX.Element {
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
}

export default App;
