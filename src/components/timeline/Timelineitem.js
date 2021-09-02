import {
  useStyles,
  Box, Heading, VStack, Text 
} from "@chakra-ui/react";

const TimelineItem = ({
  dates,
  title,
  description
}) => {
  const styles = useStyles();

  return (
    <Box
      mt={0}
      as="li"
      __css={styles.item}
    >
      <VStack 
        alignItems="flex-start"
        spacing={0}
        __css={styles.dot}
      >
        {
          Array.isArray(dates) ? (
            <VStack
              alignItems="flex-start"
              spacing={0}
            >
            {
              dates.map((date, index) => (
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  key={index}
                  color="primary">
                  {date}
                </Text>
              ))
            }
            </VStack>
          ) : (
            <Text 
              fontSize="lg"
              color="primary"
              fontWeight="bold"
            >
              {dates}
            </Text>
          )
        }
        
        <Heading pb={4}>{title}</Heading>

        {
          Array.isArray(description) ? (
            <VStack
              alignItems="flex-start"
              spacing={2}
            >
            {
              description.map((descriptionLine, index) => (
                <Text
                  key={index}>
                  {descriptionLine}
                </Text>
              ))
            }
            </VStack>
          ) : (
            <Text>{description}</Text>
          )
        }
      </VStack>
    </Box>
  )
}

export default TimelineItem;