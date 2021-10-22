import { Link } from 'react-scroll';
import { Box, Flex, Image, Text, useStyles } from '@chakra-ui/react';

const NavbarProfileImage = ({ profileImage, name }) => {
  const styles = useStyles();
  
  return (
    <Box
      mb={[0,, 4]}
    >
      <Link
        href="#about"
        to="about"
        duration={500}
        smooth={true}
      >
        <Flex
          mb={[0,, 2]}
          direction={["row",, "column"]}
          justify="center"
          align="center"
        >
          <Image
            src={profileImage}
            alt={name}
            __css={styles.image}
          />
          <Text
            fontSize={["xl",, "4xl"]}
            ml={[2,, 0]}
            color="white"
          >
            {name}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
  }

export default NavbarProfileImage;