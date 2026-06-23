/*


import logo from './logo.svg';
import './App.css';

function App() {
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
*/


import { useState, useEffect } from 'react';

function App() {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
      })
  }, [])

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Usuario</th>
	   <th>correo</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.id}>
                <td>{art.name}</td>
                <td>{art.username}</td>
                <td>{art.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App