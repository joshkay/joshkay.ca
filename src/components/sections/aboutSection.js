import { 
  Box, 
  Text, 
  Heading, 
  IconButton,
  VStack, 
  Link,
  HStack
} from '@chakra-ui/react';
import RandomKitty from 'components/RandomKitty';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const AboutSection = ({
  firstName, 
  lastName, 
  section: { 
    info: {
      email,
      phoneNumber,
      description,
      github,
      linkedIn,
      twitter
    }
  }
}) =>
(
  [
    <VStack
      key="about"
      alignItems="flex-start"
      spacing={8}
    >
      <Box>
        <Heading as="h1" size="4xl">
          <Box display="flex">
            <Box mr={2}>
              <Text>{firstName}</Text>
            </Box>
            <Text color="primary">{lastName}</Text>
          </Box>
        </Heading>
        <Box mt={2}>
          <Text>
            {`${phoneNumber} · `} 
            <Link href="mailto:name@email.com" color="primary">
              {email}
            </Link>
          </Text>
        </Box>
      </Box>
      <VStack
        alignItems="flex-start"
      >
      {
        description.split('. ').map((line, index) => (
          <Text key={index}>
            {`${line}.`}
          </Text>
        ))
      }
      </VStack>
      <HStack>
        <a 
          href={linkedIn} 
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            variant="outline"
            icon={<FaLinkedinIn />}
          />
        </a>
        <a 
          href={github} 
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            variant="outline"
            icon={<FaGithub />}
          />
        </a>
        <a 
          href={twitter} 
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            variant="outline"
            icon={<FaTwitter />}
          />
        </a>
      </HStack>
    </VStack>
    ,
    <Box
      key="kitty"
      position="absolute"
      right={0}
      bottom={0}
      padding={8}
      overflow="hidden"
    >
      <RandomKitty />
    </Box>
  ]
  
);

export default AboutSection;