import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Box, Text, Heading } from '@chakra-ui/react';

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
  <div>
    <Heading as="h1" size="2xl">
      <Box display="flex">
        {`${firstName} `}
        <Text color="primary">{lastName}</Text>
      </Box>
    </Heading>
    <div className="mb-5">{`${phoneNumber} · `} 
      <a href="mailto:name@email.com">{email}</a>
    </div>
    <p className="lead mb-5">{description}</p>
    <div className="social-icons">
      <a href={linkedIn} target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href={github} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={twitter} target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </div>
);

export default AboutSection;