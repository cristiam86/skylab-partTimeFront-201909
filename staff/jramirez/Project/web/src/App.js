import React from 'react';
import './styles/style.css';
import Header from "./components/header";
import Main from './components/main';

function App() {
  return (
    <div className="App">
       <Header />
       <main>
        <Main />
       </main>
    </div>
  );
}

export default App;
