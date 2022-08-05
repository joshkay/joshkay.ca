import React from 'react';
import Head from 'next/head';
import Navbar from 'components/nav/Navbar';
import { Flex } from '@chakra-ui/react';

const DefaultLayout = ({ 
  children, 
  name, 
  logoImage, 
  profileImage, 
  sections, 
  focusedSection 
}) =>
(
  <div>
     <Head>
      <title>{name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet='utf-8' />

      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>

    <Navbar 
      name={name}
      logoImage={logoImage}
      profileImage={profileImage}
      sections={sections}
      focusedSection={focusedSection} 
    />

    <Flex
      direction="column"
      paddingLeft={[0,, 300]}
    >
      {children}
    </Flex>
  </div>
);

export default DefaultLayout;