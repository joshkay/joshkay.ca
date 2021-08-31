import NavbarItem from './NavbarItem';
import { Stack } from '@chakra-ui/react';

const NavbarItems = ({ focusedSection, sections, onClick }) => {
  return (
    <Stack
      spacing={4}
      align="flex-start"
      paddingLeft={8}
      justify="center"
      direction="column"
    >
    {
      sections && sections.map((section, index) => (
        <NavbarItem 
          key={index} 
          active={section.id === focusedSection}
          onClick={onClick}
          to={section.id}
        >
          {section.name}
        </NavbarItem>
      ))
    }
    </Stack>
  );  
}

export default NavbarItems;