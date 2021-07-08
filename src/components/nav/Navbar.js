import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const ProfileNavbar = ({ name, profileImage, logoImage, sections, focusedSection }) => {

  const [collapsed, setCollapsed] = useState(true);
  const rootRef = useRef();

  useEffect(() => 
  {
    const handleClick = (e) =>
    {
      if (rootRef.current.contains(e.target))
      {
        return;
      }

      setCollapsed(true);
    }
    
    if (typeof window !== 'undefined')
    {
      document.addEventListener('mousedown', handleClick, false);
    }

    return () => {
      if (typeof window !== 'undefined')
      {
        document.removeEventListener('mousedown', handleClick, false);
      }
    }
  }, []);

  const toggleNavbar = () => 
  {
    setCollapsed(prevCollapsed => !prevCollapsed);
  }

  const closeNavbar = () =>
  {
    if (!collapsed) 
    {
      setCollapsed(true);
    }
  }

  const handleNavLinkClick = () =>
  {
    closeNavbar();
  }

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
          <div className={`nav-link w-100 h-100 ${activeClass}`} onClick={handleNavLinkClick}>
            {section.name}
          </div>
        </Link>
      </NavItem>
    );
  });

  return (
    <div ref={rootRef}>
      <Navbar expand="lg" fixed="top" dark className="bg-primary">
        <Link to="about" href=""
          className="navbar-brand mr-auto" smooth={true}
          hashSpy={true} duration={500}>
          <span>
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="" />
          </span>
          <span className="navbar-name">{name}</span>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ProfileNavbar;