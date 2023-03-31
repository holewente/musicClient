import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
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
} from "reactstrap";

export const MyNavbar = ({ loggedInUser, setLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showtext, setShowText] = useState(false);
  const [searching, setSearching] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="color-nav" expand="sm" fixed="top">
        <NavbarBrand href="/">
          <img
            src="/img/spoticloud.png"
            width="74px"
            height="40px"
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                className="menuelemek nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                className="menuelemek nav-link active"
                href="#"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contacts"
                className="menuelemek nav-link active"
                href="#"
              >
                Contacts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="products/1"
                className="menuelemek nav-link active"
                href="#"
              >
                Library
              </NavLink>
            </NavItem>
            <NavItem>
              {/*{!showtext ? 
              <span className='kereses'>
                <i className="fa-solid text-danger fa-magnifying-glass" onClick={()=>setShowText(true)}></i>
              </span> : 
              <span className='holder'>
                <input type="text" className='text-dark' placeholder='song name' />
                  <i className="fa-solid fa-magnifying-glass-arrow-right" onClick={()=>setSearching(true)}></i>
                <i className="close fa-solid fa-xmark" onClick={()=>setShowText(false)}></i>
              </span>
              }*/}
            </NavItem>
            <NavItem>
              <NavLink
                to="upload"
                className="menuelemek nav-link active"
                href="#"
              >
                Upload
              </NavLink>
            </NavItem>
            {loggedInUser?.role == "admin" && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="menuelemek active">
                  Admin Panel
                </DropdownToggle>
                <DropdownMenu end>

                  <DropdownItem>
                    <NavItem>
                      {" "}
                      <NavLink to="deleteMusic">Tracks</NavLink>
                    </NavItem>
                    </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      {" "}
                      <NavLink to="deleteuser">Users</NavLink>
                    </NavItem>
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
            <NavItem>
              <NavLink
                to="favorite"
                className="menuelemek nav-link active"
                href="#"
              >
                Favorites
              </NavLink>
            </NavItem>
          </Nav>

          {loggedInUser?.username ? (
            <Nav navbar>
              <NavItem className="nav-link d-flex flex-column align-items-center">
                <NavLink
                  to="userProfile"
                  className="menuelemek nav-link active"
                >
                  <img
                    src={loggedInUser.avatar}
                    alt="avatar"
                    style={{ width: "20px", borderRadius: "50%" }}
                  />
                  {loggedInUser.username}
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-end">
                <span
                  className="menuelemek btn active mb-2 nav-link "
                  onClick={() => setLoggedInUser({})}
                >
                  Logout
                </span>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar>
              <NavItem>
                <NavLink to="login" className="menuelemek nav-link active">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="register" className="menuelemek nav-link active">
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};
