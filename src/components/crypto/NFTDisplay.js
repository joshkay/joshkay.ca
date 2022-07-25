import { Flex } from '@chakra-ui/react';

const NFTDisplay = (nfts) => {
  return (
    <Flex>
      {
        JSON.stringify(nfts)
      }
    </Flex>
  )
}

export default NFTDisplay;