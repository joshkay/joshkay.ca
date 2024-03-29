import React from 'react';
import {
  useColorMode,
  IconButton
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeToggleButton = ({

}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}

export default ColorModeToggleButton;