import { 
  Box, 
  Flex, 
  Collapse, 
  useBreakpointValue,
  StylesProvider,
  useMultiStyleConfig, 
} from '@chakra-ui/react';
import ColorModeToggleButton from 'components/buttons/ColorModeToggleButton';
import React, { useEffect, useState, useRef } from 'react';
import NavbarContainer from './NavbarContainer';
import NavbarItems from './NavbarItems';
import NavbarProfileImage from './NavbarProfileImage';
import NavbarToggle from './NavbarToggle';

const Navbar = ({
  name, 
  profileImage,
  logoImage, 
  sections,
  focusedSection
}) => 
{
  const styles = useMultiStyleConfig("Navbar");

  const [collapsed, setCollapsed] = useState(true);
  const rootRef = useRef();

  const hideNavbar = useBreakpointValue({ base: true, md: false })

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

  const navItemsVisible = !hideNavbar ? true : !collapsed;

  return (
    <NavbarContainer ref={rootRef}>
      <StylesProvider value={styles}>
        <Flex
          minHeight={[0,, 600]}
          height="100%"
          width={["100%",, "auto"]}
          direction="column"
          justify={["flex-start",, "center"]}
          alignItems="center"
          flexShrink={0}
        >
          <Flex
            direction={["row",, "column"]}
            alignItems="center"
            width="100%"
          >
            <NavbarProfileImage 
              profileImage={profileImage}
              logoImage={logoImage}
              name={name}
            />
            <NavbarToggle
              onClick={toggleNavbar}
              isOpen={navItemsVisible}
            />
          </Flex>
          <Collapse 
            in={navItemsVisible} 
            direction="top" 
            style={{ width: '100%' }}
          >
            <NavbarItems 
              sections={sections}
              focusedSection={focusedSection}
              onClick={handleNavLinkClick}
            />
            <Box
              position="absolute"
              right={[0,, "auto"]}
              bottom={[0,, "auto"]}
              top={[null,, 0]}
              left={[null,, 0]}
              m={1}
            >
              <ColorModeToggleButton />
            </Box>
          </Collapse>
        </Flex>
      </StylesProvider>
    </NavbarContainer>
  );
};

export default Navbar;