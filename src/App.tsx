import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <FilterComponent />
      <ChatView></ChatView>
    </div>
  );
}

export default App;
