import React from 'react';
import {Navbar, NavbarToggler,Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './NavBar.css';


export const NavBar = (props) => {
    return (
        <div
        >
  <Navbar
    className="Nav-Bar"
    expand="xl"
    light
    max-width="100%"
    
    
    
  >
    
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar
      
      full>
      <Nav
        className="me-auto"
        navbar
        
      >
        <NavItem className="Nav-Item" >
          <NavLink
          className="nav-link" 
          to="/concept/">
            Concept
          </NavLink>
        </NavItem>

        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
            className='Nav-Item'
          >
            Perfumes
          </DropdownToggle>

          <DropdownMenu right>
            <DropdownItem>
              Wake Up World
            </DropdownItem>
            <DropdownItem>
              Mile High
            </DropdownItem>
            <DropdownItem>
              Saffron Wood
            </DropdownItem>
            <DropdownItem>
              Haute Provence
            </DropdownItem>
            <DropdownItem>
              Gardens of India
            </DropdownItem>
            <DropdownItem>
              Papyrus Oud
            </DropdownItem>
            <DropdownItem>
              Orris Tattoo
            </DropdownItem>
            <DropdownItem>
              Chypre Mojo
            </DropdownItem>
            <DropdownItem>
              Une Tonne de Roses
            </DropdownItem>
            <DropdownItem>
              Guimauve de Noel
            </DropdownItem>
            <DropdownItem>
              Flavia Vanilla
            </DropdownItem>
            <DropdownItem>
              Totally White
            </DropdownItem>
            <DropdownItem>
              Cedar Woodpecker
            </DropdownItem>
            <DropdownItem>
              Milky Musk
            </DropdownItem>
            <DropdownItem>
              Tomboy Neroli 
            </DropdownItem>
            <DropdownItem>
              Woody Pefecto
            </DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem className="Nav-Item">
          <NavLink
          className="nav-link"
          to="/shops/">
            Shops
          </NavLink>
        </NavItem>
        <NavItem className="Nav-Item">
            <NavLink 
            className="nav-link"
            to="/find-us/">
                Find Us
            </NavLink>
        </NavItem>
        <NavItem className="Nav-Item">
            <NavLink 
            className="nav-link"
            to="/contact/">
                Contact
            </NavLink>
        </NavItem>
      </Nav>
      </Collapse>
  </Navbar>
</div>
    );
}