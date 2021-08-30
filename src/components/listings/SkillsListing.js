import { HStack, Text, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { IconElement } from 'tools/icons';

const SkillsListing = ({ languages, libraries, workflow }) =>
{
  const softwareList = (list) => list.map((listEntry, index) =>
  (
    <WrapItem
      key={index}
    >
      <VStack 
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
    </WrapItem>
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
    >
      <VStack
        alignItems="flex-start"
        spacing={6}
      >
        <Heading>Languages</Heading>
        <Wrap 
          as="ul"
          listStyleType="none"
          wrap="wrap"
          spacing={6}
        >
          {softwareList(languages)}
        </Wrap>
      </VStack>
      
      <VStack
        alignItems="flex-start"
        spacing={6}
      >
        <Heading>Libraries</Heading>
        <Wrap 
          as="ul"
          listStyleType="none"
          wrap="wrap"
          spacing={4}
        >
          {softwareList(libraries)}
        </Wrap>
      </VStack>

      <VStack
        alignItems="flex-start"
        spacing={6}
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