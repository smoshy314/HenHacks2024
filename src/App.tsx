import React from 'react';
import Map from './components/map';
// import logo from './logo.svg';

import './App.css';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';
import { DisplayMap } from './DisplayView/DisplayMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <FilterComponent />
      <DisplayMap />
      <ChatView></ChatView>
    </div>
  );
}
  
export default App;
