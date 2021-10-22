import { forwardRef } from 'react';
import { Flex } from '@chakra-ui/react';

const NavbarContainer = forwardRef(({ children, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      as="nav"
      alignItems="center"
      justify="flex-start"
      position="fixed"
      flexDirection={["row",, "column"]}
      top={[0]}
      left={[0]}
      w={["100%",, 300]}
      height={["auto",, "100%"]}
      mb={[0,, 8]}
      p={[2,, 8]}
      backgroundColor="primary"
      overflowY="auto"
      {...props}
      zIndex={1}
    >
      {children}
    </Flex>
  )
});

NavbarContainer.displayName = 'NavbarContainer';

export default NavbarContainer;