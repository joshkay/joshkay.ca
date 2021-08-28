import { Link } from 'react-scroll';
import { Text } from '@chakra-ui/react';

const NavbarItem = ({ children, isLast, to, ...rest }) => {
  return (
    <Link 
      href={`#${to}`}
      to={to}
    >
      <Text 
        fontSize="xl" 
        display="block"
        color="white"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

export default NavbarItem;