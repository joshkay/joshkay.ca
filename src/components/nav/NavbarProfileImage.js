import { Link } from 'react-scroll';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { transparentize } from "@chakra-ui/theme-tools"

const NavbarProfileImage = ({ profileImage, name }) => (
  <Box
    mb={4}
  >
    <Link
      href="#about"
      to="about"
    >
      <Flex
        mb={2}
        direction="column"
        justify="center"
        align="center"
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          border="4px"
          borderColor={transparentize("white", 0.3)}
          src={profileImage}
          alt={name}
        />
        <Text
          fontSize="4xl"
        >
          {name}
        </Text>
      </Flex>
    </Link>
  </Box>
);

export default NavbarProfileImage;