import {
  Flex,
  Grid, 
  GridItem,
  Heading,
  VStack
} from '@chakra-ui/react';
import PortfolioListing from 'components/listings/PortfolioListing';

const PortfolioSection = (
  { section: { items }}
) =>
{
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={8}
    >
    {
      items.map((item, index) => (
        <GridItem
          key={index} 
        >
          <PortfolioListing 
            {...item}
          />
        </GridItem>
      ))
    }
    </Grid>
  );
}

export default PortfolioSection;