import React from 'react';
import SkillsListing from '../listings/skillsListing';

export default ({section: {info: {languages, libraries, workflow}}}) =>
(
  <SkillsListing
    languages={languages}
    libraries={libraries}
    workflow={workflow}
  />
);