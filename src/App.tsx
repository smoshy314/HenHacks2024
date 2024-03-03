import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';
import Collapsible from 'react-collapsible';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="App-title">AccessiTek</div>
        <br></br>
        <Collapsible className="App-help" trigger="❓">
          <p>
            Here's how to use our site!
          </p>
        </Collapsible>
        <br></br>
      </header>
      <FilterComponent />
      <ChatView></ChatView>
    </div>
  );
}
  
export default App;
