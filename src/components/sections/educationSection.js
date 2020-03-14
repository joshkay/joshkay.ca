import React from 'react';
import ExperienceListing from '../listings/ExperienceListing';

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