import { Box, Flex } from '@chakra-ui/react';
import ColorModeToggleButton from 'components/buttons/ColorModeToggleButton';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NavbarContainer from './NavbarContainer';
import NavbarItems from './NavbarItems';
import NavbarProfileImage from './NavbarProfileImage';

const ProfileNavbar = ({ name, profileImage, logoImage, sections, focusedSection }) => 
{
  const [collapsed, setCollapsed] = useState(true);
  const rootRef = useRef();

  useEffect(() => 
  {
    const handleClick = (e) =>
    {
      if (!rootRef.current || rootRef.current.contains(e.target))
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

  return (
    <NavbarContainer ref={rootRef}>
      <Flex
        minHeight={600}
        height="100%"
        direction="column"
        justify="center"
        flexShrink={0}
      >
        <NavbarProfileImage 
          profileImage={profileImage}
          name={name}
        />
        <NavbarItems 
          sections={sections}
          focusedSection={focusedSection}
          onClick={handleNavLinkClick}
        />
      </Flex>
      
      <Box
        position="absolute"
        top={0}
        left={0}
        m={1}
      >
        <ColorModeToggleButton />
      </Box>
    </NavbarContainer>
  );
};

export default ProfileNavbar;