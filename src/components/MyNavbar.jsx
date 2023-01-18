import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'reactstrap';

 export const MyNavbar=({loggedInUser,setLoggedInUser})=> {
  const [isOpen, setIsOpen] = useState(false);
  const [showtext, setShowText] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='sm' dark color='dark' fixed='top'>
        <NavbarBrand href="/"><img src='img/spoticloud.png' width='74px' height='40px' alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="about" className="nav-link" href="#">About </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="contacts" className="nav-link" href="#">Contacts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="products" className="nav-link" href="#">Library</NavLink>
            </NavItem>
            <NavItem>
              {!showtext ? 
              <span className='kereses'>
                <i className="fa-solid text-danger fa-magnifying-glass" onClick={()=>setShowText(true)}></i>
              </span> : 
              <span className='holder border border-danger'>
                <input type="text" className='text-dark' />
                <i className="close fa-solid fa-xmark" onClick={()=>setShowText(false)}></i>
              </span>
              }
            
            </NavItem>
          {loggedInUser?.role=='admin' &&
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Admin Panel
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>User</DropdownItem>
                <DropdownItem>Products</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                <NavItem>
                <NavLink to="books">Books</NavLink>
                </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
 }
          </Nav>
      
          {loggedInUser?.username? 
          (
            <Nav navbar>
                <NavItem className="nav-link d-flex flex-column align-items-center">
                  <NavLink to='userProfile' className='nav-link'>
                      <img src={loggedInUser.avatar} alt="avatar" style={{width:"20px",borderRadius:"50%"}}/>
                      {loggedInUser.username}
                  </NavLink>
                </NavItem>
                <NavItem className='d-flex align-items-end'>
                      <span className='btn text-info' onClick={()=>setLoggedInUser({})}>Logout</span>
                </NavItem>
            </Nav>)
            :
            (
              <Nav navbar>
                <NavItem>
                    <NavLink to="login" className="nav-link">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='register' className='nav-link'>Register</NavLink>
                </NavItem>
            </Nav>
            )
}
        </Collapse>
      </Navbar>
    </div>
  );
}