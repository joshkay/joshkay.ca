import ExperienceListing from '../listings/ExperienceListing';

const EducationSection = ({section: {items}}) =>
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

export default EducationSection;