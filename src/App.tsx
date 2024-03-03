// import React from 'react';
// // import logo from './logo.svg';
// import Header from './Header';

// import './App.css';
// import { ChatView } from './components/ChatView';
// import FilterComponent from './DisplayView/FilterComponent';
// import Collapsible from 'react-collapsible'; //npm install react-collapsible
// import DisplaySchools from './DisplayView/DisplaySchools';

// function App() {
//   return (
//     <div className="App">
//       <Header>
//       {/* <header className="App-header"> */}
//       <section id ="about">
//         <div className="App-title">AccessiTech</div>
//         <Collapsible className="App-help" trigger=" Need Help❓" style={{ fontSize: '16px' }}>
//           <p  style={{ fontSize: '16px' }}>
//             AccessiTech is a web application aimed at providing up-to-date information on accessibility features to locations. 
//             Such as: wheelchair accessible ramps, elevators and gender-inclusive bathrooms. 
//             AccessiTech also aims to connect you with others through your school's student-run organizations and nearby groups focused around accessibility.
//             Use our map to view locations of elevators or use our text feature to connect with people nearby!
//           </p>
//           <p  style={{ fontSize: '16px' }}>
//             Available features:
//             <ul>
//               <li>
//                 Choose your school from our dropdown to view the chat options and map/list views
//               </li>
//               <li>
//                 View a 
//               </li>
//             </ul>
//           </p>
//       </Collapsible>
//       </section>
//       {/* </header> */}
//         <DisplaySchools />
//         <br></br>
//         <section id="navigation">
//           <FilterComponent />
//         </section>
//         <hr></hr>
//         <section id="connect">
//           <ChatView></ChatView>
//         </section>
//         <section id="contact">contact us!</section>
//       </Header>
//     </div>
//   );
// }
  
// export default App;

import React from 'react';
import { ChatView } from './components/ChatView';
import FilterComponent from './DisplayView/FilterComponent';
import Collapsible from 'react-collapsible'; //npm install react-collapsible
import DisplaySchools from './DisplayView/DisplaySchools';
import styled from 'styled-components'; // Import styled-components here
import { Link } from 'react-scroll';

// Styled components from the Header component file
const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between; /* Align items to the start and end of the container */
  align-items: center; /* Align items vertically */
  position: -webkit-sticky;
  position: sticky;
  top: -5px;
  z-index: 2;
  height: 70px;
  min-height: 70px;
  width: 100%;
  background-color: #f0f0f0;
  padding: 0 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
  gap: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #b36a5e;
  }
`;

const AppTitle = styled.h1`
  margin-top: -5px;
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
  padding: 4rem;
  color: #f0f0f0; 
  background-color: #4b4a67;
`;

const AppHelp = styled.div`
  font-size: 16px;
  text-align: center;
`;

const SchoolComponent = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <HeaderComponent>
        <header>
          <nav>
            <NavList>
              <NavItem>
                <NavLink activeClass="active" smooth spy to="about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClass="active" smooth spy to="navigation">
                  Navigation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClass="active" smooth spy to="connect">
                  Connect
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClass="active" smooth spy to="contact">
                  Contact Us
                </NavLink>
              </NavItem>
            </NavList>
          </nav>
        </header>
        {/* Add children components */}
        {/* End children components */}
      </HeaderComponent>
      <section id="about">
          {/* <div className="App-title">AccessiTech</div> */}
          <AppTitle>AccessiTech
            <AppHelp>
                <Collapsible trigger=" Need Help❓" style={{ fontSize: '16px' }}>
                  <p>
                    AccessiTech is a web application aimed at providing up-to-date information on accessibility features to locations.
                    Such as: wheelchair accessible ramps, elevators and gender-inclusive bathrooms.
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
              </AppHelp>
            </AppTitle>
        </section>
      {/* Rest of your content */}
      <SchoolComponent>
        <DisplaySchools />
      </SchoolComponent>
      <br />
      <section id="navigation"> 
      {/* map component goes here*/}
        <FilterComponent />
      </section>
      <hr />
      <section id="connect">
        <ChatView />
      </section>
      <section id="contact">contact us!</section>
    </div>
  );
}

export default App;
