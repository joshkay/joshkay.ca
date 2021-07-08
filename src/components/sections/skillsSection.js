import SkillsListing from '../listings/skillsListing';

const SkillsSection = ({section: {info: {languages, libraries, workflow}}}) =>
(
  <SkillsListing
    languages={languages}
    libraries={libraries}
    workflow={workflow}
  />
);

export default SkillsSection;