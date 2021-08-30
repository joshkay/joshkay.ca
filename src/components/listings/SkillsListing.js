import { Box, HStack, Text, Heading, VStack } from '@chakra-ui/react';
import { getIconElement } from 'tools/icons';

const SkillsListing = ({ languages, libraries, workflow }) =>
{
  const softwareList = (list) => list.map((listEntry, index) =>
  (
    <Box key={index} as="li">
      { getIconElement(listEntry) }
      <Text>{ listEntry }</Text>
    </Box>
  ));

  const workflowList = workflow.map((workflowEntry, index) =>
  (
    <Box as="li" key={index}>
      <Box mr={2}>
        <Text color="primary">
          ✔
        </Text>
      </Box>
      
      <Text>
      { workflowEntry }
      </Text>
      
    </Box>
  ));

  return (
    <div>
      <Heading>Languages</Heading>
      <HStack as="ul">
        {softwareList(languages)}
      </HStack>

      <Heading>Libraries</Heading>
      <HStack as="ul">
        {softwareList(libraries)}
      </HStack>

      <Heading>Workflow</Heading>
      <VStack as="ul">
        {workflowList}
      </VStack>
    </div>
  );
};

export default SkillsListing;