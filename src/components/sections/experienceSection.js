import React from 'react';
import ExperienceListing from '../experienceListing';

export default ({section: {items}}) =>
(
  items.map(({
    title, company, description, dates
  }, index) =>
  (
    <ExperienceListing key={index} title={title}
      company={company} description={description} 
      dates={dates}
    />
  ))
);