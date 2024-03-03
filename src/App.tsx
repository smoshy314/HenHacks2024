import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';
import Collapsible from 'react-collapsible';
import DisplaySchools from './DisplayView/DisplaySchools';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="App-title">AccessiTek</div>
        <br></br>
        <Collapsible className="App-help" trigger="❓">
          <p>
            AccessiTek is a web application aimed at providing up-to-date information on accessibility features to locations. 
            Such as: wheelchair accessible ramps, elevators and gender-inclusive bathrooms. 
            AccessiTek also aims to connect you with others through your school's student-run organizations and nearby groups focused around accessibility.
            Use our map to view locations of elevators or use our text feature to 
          </p>
        </Collapsible>
        <br></br>
      </header>
      <DisplaySchools />
      <FilterComponent />
      <ChatView></ChatView>
    </div>
  );
}
  
export default App;
