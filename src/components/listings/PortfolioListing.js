import { 
  Box, 
  Flex, 
  Heading, 
  HStack, 
  Image, 
  Text,
  Tooltip,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { IconElement } from 'tools/icons';

const PortfolioListing = ({ name, image, description, tools, githubUrl, siteUrl }) =>
{
  const styles = useMultiStyleConfig("PortfolioListing");
  
  return (
    <Flex
      __css={styles.base}
    >
      <Flex 
        alignItems="center"
        mb={4}
      >
        <Heading 
          as="h2"
        >
          {name}
        </Heading>
        {
          githubUrl ? (
            <Box
              ml="auto"
              alignSelf="flex-start"
            >
              <a 
                href={githubUrl} 
                rel="noreferrer" 
                target="_blank"
              >
                <IconElement 
                  name="Github"
                  w={10}
                  h={10}
                />
              </a>
            </Box>
          ) : null
        }
      </Flex>
      {
        image ? (
          <a 
            href={siteUrl} 
            target="_blank" 
            rel="noreferrer"
          >
            <Image
              __css={styles.image}
              src={image} 
              alt={`Portfolio image for ${name}`}
            />
          </a>
        ) : null
      }
      <Box>
        <Text mb={2}>
          {description}
        </Text>

        <Flex>
          <Heading
            fontSize="3xl"
            as="h3"
            mr={3}
          >
            Built with
          </Heading>
          <HStack>
          {
            tools.map((tool, index) =>
            (
              <Tooltip
                label={tool}
                key={index} 
              >
                <IconElement 
                  name={tool}
                  w={6} 
                  h={6} 
                />
              </Tooltip>
            ))
          }
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default PortfolioListing;