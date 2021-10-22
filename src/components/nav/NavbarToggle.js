import React from 'react';
import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const NavbarToggle = ({ onClick, isOpen }) => {
  return (
    <Box 
      visibility={["visible",, "hidden"]}
      marginLeft="auto"
      cursor="pointer"
      onClick={onClick}
      pr={2}
    >
      {isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
    </Box>
  )
}

export default NavbarToggle;