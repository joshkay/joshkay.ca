import React from 'react';
import Head from 'next/head';
import ProfileNavbar from '../components/navbar';

export default ({ children, name, image }) =>
(
  <div>
     <Head>
      <title>{name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet='utf-8' />
    </Head>

    <ProfileNavbar name={name} image={image} />

    <div className="container-fluid p-0">
      {children}
    </div>
  </div>
);