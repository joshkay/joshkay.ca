import { Link } from 'react-scroll';
import { Flex, Text } from '@chakra-ui/react';
import { transparentize } from "@chakra-ui/theme-tools";

const NavbarItem = ({ 
  children, 
  isLast, 
  to,
  active,
  ...rest 
}) => {
  return (
    <Link 
      href={`#${to}`}
      to={to}
      duration={500}
      smooth={true}
    >
      <Flex
        alignItems="center"
      >
        <Text 
          fontSize="xl" 
          display="block"
          color={active ? "white" : transparentize("white", 0.5)}
          {...rest}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

export default NavbarItem;