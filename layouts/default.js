import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';

export default ({ children, meta }) =>
(
  <div>
     <Head>
      <title>Josh Kay</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {
      children
    }
  </div>
);