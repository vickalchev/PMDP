import React from 'react';
import {Navbar, NavbarToggler,Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
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
            <Link className='link' to='wake-up-world'>
                <DropdownItem className='dropdown-item'>
                  Wake Up World
                </DropdownItem>
            </Link>
            
            <Link className='link' to='mile-high-38'>
              <DropdownItem>
                Mile High / 38
              </DropdownItem>
            </Link>
            
            <Link className='link' to='saffron-wood-91'>
              <DropdownItem>
                Saffron Wood / 91
              </DropdownItem>
            </Link>
            
            <Link className='link' to='haute-provence-89'>
              <DropdownItem>
                Haute Provence / 89
              </DropdownItem>
            </Link>

            <Link className='link' to='gardens-of-india-79'>
              <DropdownItem>
                Gardens of India / 79
              </DropdownItem>
            </Link>

            <Link className='link' to='papyrus-oud-71'>
              <DropdownItem>
                Papyrus Oud / 71
              </DropdownItem>
            </Link>

            <Link className='link' to='orris-tattoo-29'>
              <DropdownItem>
                Orris Tattoo / 29
              </DropdownItem>
            </Link>

            <Link className='link' to='cypre-mojo-45'>
              <DropdownItem>
                Chypre Mojo / 45
              </DropdownItem>
            </Link>

            <Link className='link' to='une-tonne-de-roses-8' >
              <DropdownItem>
                Une Tonne de Roses / 8
              </DropdownItem>
            </Link>
            
            <Link className='link' to='giumauve-de-noel-31'>
              <DropdownItem>
                Guimauve de Noel / 31
              </DropdownItem>
            </Link>

            <Link className='link' to='flavia-vanilla-82'>
              <DropdownItem>
                Flavia Vanilla / 82
              </DropdownItem>
            </Link>

            <Link className='link' to='totally-white-126'>
              <DropdownItem>
                Totally White / 126
              </DropdownItem>
            </Link>

            <Link className='link' to='cedar-woodpecker-10'>
              <DropdownItem>
                Cedar Woodpecker / 10
              </DropdownItem>
            </Link>

            <Link className='link' to='milky-musk-39'>
              <DropdownItem>
                Milky Musk / 39
              </DropdownItem>
            </Link>

            <Link className='link' to='tomboy-neroli-65'>
              <DropdownItem>
                Tomboy Neroli / 65
              </DropdownItem>
            </Link>

            <Link className='link' to='woody-perfecto-107'>
              <DropdownItem>
                Woody Pefecto / 107
              </DropdownItem>
            </Link>
            
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