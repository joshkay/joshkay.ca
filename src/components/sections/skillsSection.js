import SkillsListing from 'components/listings/SkillsListing';

const SkillsSection = ({section: {info: {languages, libraries, workflow}}}) =>
(
  <SkillsListing
    languages={languages}
    libraries={libraries}
    workflow={workflow}
  />
);

export default SkillsSection;