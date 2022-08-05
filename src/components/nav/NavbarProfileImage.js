import { Link } from 'react-scroll';
import { Box, Flex, Image, Text, useStyles } from '@chakra-ui/react';

const NavbarProfileImage = ({ 
  profileImage,
  logoImage, 
  name 
}) => {
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
          position="relative"
        >
          <Image
            src={profileImage}
            alt={name}
            __css={styles.image}
          />
          <Image
            src={logoImage}
            alt="Logo"
            __css={styles.logo}
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