import React from 'react';
import SkillsListing from '../skillsListing';

export default ({section: {info: {languages, libraries, workflow}}}) =>
(
  <SkillsListing
    languages={languages}
    libraries={libraries}
    workflow={workflow}
  />
);