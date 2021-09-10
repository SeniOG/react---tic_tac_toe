import React from 'react';
import Board from './components/Board';
import Reset from './components/Reset';

function App() {
  return (
    <div className="App">
    <h1 className="header">Tic Tac Toe</h1>
    <Board />
    <Reset />
    </div>
  );
}

export default App;
