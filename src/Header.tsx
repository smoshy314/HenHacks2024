import React, { ReactNode } from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
//npm i react-scroll
//npm i --save-dev @types/react-scroll

interface HeaderProps {
    children?: ReactNode;
  }

  const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between; /* Align items to the start and end of the container */
  align-items: center; /* Align items vertically */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 70px;
  min-height: 70px;
  width: 100%;
  background-color: #fff;
  padding: 0 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
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

function Header({ children }: HeaderProps) {
    return (
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
        {children}
      </header>
    </HeaderComponent>
    );
}

export default Header;