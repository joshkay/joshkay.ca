import React from 'react';
import { Link } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class ProfileNavbar extends React.Component
{
  constructor(props) 
  {
    super(props);

    this.rootRef = React.createRef();
    
    this.state = {
      collapsed: true
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
  }

  componentWillMount()
  {
    if (typeof window !== 'undefined')
    {
      document.addEventListener('mousedown', this.handleClick, false);
    }
  }

  componentWillUnmount()
  {
    if (typeof window !== 'undefined')
    {
      document.removeEventListener('mousedown', this.handleClick, false);
    }
  }

  toggleNavbar() 
  {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleClick(e)
  {
    if (this.rootRef.current.contains(e.target))
    {
      return;
    }

    this.handleClickOutside();
  }

  handleClickOutside()
  {
    this.closeNavBar();
  }

  handleNavLinkClick()
  {
    this.closeNavBar();
  }

  closeNavBar()
  {
    if (this.state.collapsed)
    {
      return;
    }
    
    this.setState({
      collapsed: true
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
          <Link to={section.id} href="" hashSpy={true} duration={500} smooth={true}>
            <div className={`nav-link w-100 h-100 ${activeClass}`} onClick={this.handleNavLinkClick}>
              {section.name}
            </div>
          </Link>
        </NavItem>
      );
    });

    return (
      <div ref={this.rootRef}>
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