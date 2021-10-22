import { HStack, Text, Heading, VStack, Wrap, SimpleGrid } from '@chakra-ui/react';
import { IconElement } from 'tools/icons';

const SkillsListing = ({ languages, libraries, workflow }) =>
{
  const softwareList = (list) => list.map((listEntry, index) =>
  (
    <VStack 
      key={index}
      as="li"
      spacing={4}
    >
      <IconElement 
        w={24} 
        h={24} 
        name={listEntry}
        _hover={{ color: "primary" }}
      />
      <Text>
        { listEntry }
      </Text>
    </VStack>
  ));

  const workflowList = workflow.map((workflowEntry, index) =>
  (
    <VStack 
      as="li" 
      key={index}
    >
      <HStack
        alignItems="flex-start"
      >
        <Text color="primary">
          ✔
        </Text>
        
        <Text>
        { workflowEntry }
        </Text>
      </HStack>      
    </VStack>
  ));

  return (
    <VStack 
      alignItems="flex-start"
      spacing={12}
      w="100%"
    >
      <VStack
        alignItems="flex-start"
        spacing={6}
        w="100%"
      >
        <Heading>Languages</Heading>
        <SimpleGrid
          w="100%"
          minChildWidth="100px"
          as="ul"
          listStyleType="none"
          spacing={6}
        >
          {softwareList(languages)}
        </SimpleGrid>
      </VStack>
      
      <VStack
        alignItems="flex-start"
        spacing={6}
        w="100%"
      >
        <Heading>Libraries</Heading>
        <SimpleGrid
          //w="100%"
          minChildWidth="100px"
          as="ul"
          listStyleType="none"
          spacing={6}
        >
          {softwareList(libraries)}
        </SimpleGrid>
      </VStack>

      <VStack
        alignItems="flex-start"
        spacing={6}
        w="100%"
      >
        <Heading>Workflow</Heading>
        <VStack 
          as="ul"
          alignItems="flex-start"
          listStyleType="none"
        >
          {workflowList}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SkillsListing;