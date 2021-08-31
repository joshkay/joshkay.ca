import { Link } from 'react-scroll';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';

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
        {
          active ? (
            <Icon
              as={BiRightArrow}
              mr={2}
            />
          ) : null
        }
        
        <Text 
          fontSize="xl" 
          display="block"
          color="white"
          {...rest}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

export default NavbarItem;