import React from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class ProfileNavbar extends React.Component
{
  constructor(props) 
  {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() 
  {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render()
  {
    const { name, image } = this.props;

    return (
      <div>
        <Navbar expand="lg" fixed="top" dark className="bg-primary">
          <NavbarBrand href="/" className="mr-auto">
            <span>
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="" />
            </span>
            <span className="navbar-name">{name}</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skils</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};