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
      onLeave={handleWaypointLeave}
      topOffset="500px"
      bottomOffset="500px"
    >
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
          m={[10,,, 20]}
          mt={20}
        >
          { 
            heading ? (
              <Heading 
                as="h2" 
                size="2xl"
                fontWeight={499}
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