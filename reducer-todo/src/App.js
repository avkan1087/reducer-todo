import React from 'react';
import Todo from './components/Todo';
import './App.css';



function App() {
  
  return (
    <div className="app">
      <div className= "header">
          <h2>Reducer Todo App!</h2>
        
          <Todo/>
      </div>
    </div>

  );
}

export default App;