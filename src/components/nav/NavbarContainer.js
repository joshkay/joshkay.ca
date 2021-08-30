import { forwardRef } from 'react';
import { Flex } from '@chakra-ui/react';

const NavbarContainer = forwardRef(({ children, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      as="nav"
      align="center"
      justify="flex-start"
      position="fixed"
      flexDirection="column"
      top={0}
      left={0}
      w={300}
      height="100%"
      mb={8}
      p={8}
      backgroundColor="primary"
      overflowY="auto"
      {...props}
    >
      {children}
    </Flex>
  )
});

NavbarContainer.displayName = 'NavbarContainer';

export default NavbarContainer;