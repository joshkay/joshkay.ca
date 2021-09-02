import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Waypoint } from 'react-waypoint';

const ProfileSection = ({ 
  id, 
  number,
  heading,
  children,
  handleSectionEnter,
  handleSectionLeave
}) =>
{
  const handleWaypointEnter = () =>
  {
    handleSectionEnter({
      id, 
      number,
    });
  }

  const handleWaypointLeave = () =>
  {
    handleSectionLeave({
      id, 
      number,
    });
  }

  return (
    <Waypoint
      onEnter={handleWaypointEnter}
      onLeave={handleWaypointLeave}>
      <Flex
        minHeight="100vh"
        position="relative"
        id={id}
    >
        <Flex
          alignItems="flex-start"
          justifyContent="center"
          direction="column"
          grow={1}
          m={20}
        >
          { 
            heading ? (
              <Heading 
                as="h2" 
                size="2xl" 
                mb={12}
              >
                {heading}
              </Heading>
            ) : null
          }
          {children}
        </Flex>
      </Flex>
    </Waypoint>
  );
};

export default ProfileSection;