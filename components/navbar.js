import React from 'react';
import Link from 'next/link'

export default () =>
(
  <nav className='nav'>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/cats'>Cats</Link>
      </li>
      <li>
        <Link href='/cats/russian_blue'>Russian Blues</Link>
      </li>
    </ul>
  </nav>
);