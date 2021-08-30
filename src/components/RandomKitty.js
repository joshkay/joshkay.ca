import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const RandomKitty = ({

}) => 
{
  const [loadingImage, setLoadingImage] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [cachedImage, setCachedImage] = useState(null);
  
  const fetchCats = async () =>
  {
    setLoadingImage(true);

    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/images/search?limit=1'
    );

    const url = data && data.length > 0 && data[0] && data[0].url ? data[0].url : null;

    if (url)
    {
      setDisplayedImage(data[0].url);
    }
  }

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Flex
      borderRadius="full"
      boxSize="200px"
      border="4px"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      {
        loadingImage ? (
          <Spinner 
            position="absolute"
            color="primary"
            boxSize="200px"
            thickness="4px"
          />
        ) : null
      }
      
      <Box
        position="relative"
        width="100%"
        height="100%"
      >
        <Image
          position="absolute"
          width="100%"
          height="100%"
          display={loadingImage ? "none" : undefined}
          objectFit="cover"
          borderRadius="full"
          borderColor="transparent"
          onClick={() => fetchCats()}
          src={displayedImage} 
          alt='Cute kitty' 
          onLoad={() => { 
            setLoadingImage(false);
            setCachedImage(displayedImage)
          }}
          draggable={false}
          userSelect="none"
        />
        <Image
          position="absolute"
          width="100%"
          height="100%"
          display={loadingImage && cachedImage ? undefined : "none"}
          objectFit="cover"
          borderRadius="full"
          borderColor="transparent"
          onClick={() => fetchCats()}
          src={cachedImage} 
          alt='Cute kitty'
          draggable={false}
          userSelect="none"
        />
      </Box>
    </Flex>
    
  );
};

export default RandomKitty;