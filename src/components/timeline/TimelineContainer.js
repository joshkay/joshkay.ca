import {
  StylesProvider,
  useMultiStyleConfig,
  Flex
} from "@chakra-ui/react";

const TimelineContainer = ({
  children
}) => {
  
  const styles = useMultiStyleConfig("Timeline");

  return (
    <Flex 
      ms={4}
      as="ul"
      __css={styles.base}
    >
      <StylesProvider value={styles}>
      {
        children
      }
      </StylesProvider>
    </Flex>
  )
}

export default TimelineContainer;