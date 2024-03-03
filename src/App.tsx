import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';
import Collapsible from 'react-collapsible'; //npm install react-collapsible
import DisplaySchools from './DisplayView/DisplaySchools';
import TextToSpeech from './components/TextToSpeech';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">AccessiTech</div>
      </header>
      <Collapsible className="App-help" trigger="❓">
          <p>
            AccessiTech is a web application aimed at providing up-to-date information on accessibility features to locations such as: wheelchair accessible ramps, elevators and gender-inclusive bathrooms. 
          </p>
          <p>
            AccessiTech also aims to connect you with others through your school's student-run organizations and nearby groups focused around accessibility.
            Use our map to view locations of elevators or use our text feature to connect with people nearby!
          </p>
          <p>
            Available features:
            <ul>
              <li>
                Choose your school from our dropdown to view the chat options and map/list views
              </li>
              <li>
                View a 
              </li>
            </ul>
          </p>
      </Collapsible>
      <DisplaySchools />
      <br></br>
      <FilterComponent />
      <hr></hr>
      <ChatView></ChatView>
      <br></br>
      <TextToSpeech text="hi my name is alexa" />
    </div>
  );
}
  
export default App;
