import { forwardRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';

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
      <Flex
        minHeight={600}
        height="100%"
        direction="column"
        justify="center"
        flexShrink={0}
      >
        {children}
      </Flex>
    </Flex>
  )
});

export default NavbarContainer;