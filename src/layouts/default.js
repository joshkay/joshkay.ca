import React from 'react';
import Head from 'next/head';
import ProfileNavbar from '../components/nav/navbar';

const DefaultLayout = ({ children, name, logoImage, profileImage, sections, focusedSection }) =>
(
  <div>
     <Head>
      <title>{name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet='utf-8' />

      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>

    <ProfileNavbar 
      name={name} 
      logoImage={logoImage} 
      profileImage={profileImage}
      sections={sections}
      focusedSection={focusedSection} />

    <div className="container-fluid p-0">
      {children}
    </div>
  </div>
);

export default DefaultLayout;