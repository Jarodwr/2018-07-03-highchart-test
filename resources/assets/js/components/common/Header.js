import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavLink, Nav, Collapse } from 'reactstrap';


const Header = () => {
  let NavLinks = [
    { title: "Stats", url: "/stats" },
    { title: "About", url: "/about" }
  ];

  return (
    <Navbar color="dark" expand="lg" dark>
      <NavbarBrand tag={Link} to={"/"} >Home</NavbarBrand>
      <Collapse navbar>
        <Nav navbar>
          {NavLinks.map(element => <NavLink key={element.title} tag={Link} to={element.url}>{element.title}</NavLink>)}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;