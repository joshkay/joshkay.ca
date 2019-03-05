import React from 'react';
import { Link } from 'react-scroll';
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
    const { name, image, sections, focusedSection } = this.props;

    const navItems = sections.map((section, index) =>
    {
      let activeClass = '';
      if (section.id === focusedSection)
      {
        activeClass = 'active';
      }

      return (
        <NavItem key={index}>
          <Link to={section.id} href=""
            className={`nav-link ${activeClass}`} smooth={true}
            hashSpy={true} duration={500}>
            {section.name}
          </Link>
        </NavItem>
      );
    });

    return (
      <div>
        <Navbar expand="lg" fixed="top" dark className="bg-primary">
          <Link to="about" href=""
            className="navbar-brand mr-auto" smooth={true}
            hashSpy={true} duration={500}>
            <span>
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="" />
            </span>
            <span className="navbar-name">{name}</span>
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};