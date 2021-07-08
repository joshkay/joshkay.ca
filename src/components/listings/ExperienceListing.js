import ParagraphList from '../display/ParagraphList';

const ExperienceListing = ({ title, company, description, dates }) =>
(
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{title}</h3>
      <div className="subheading mb-3">{company}</div>
      <ParagraphList content={description} />
    </div>
    <div className="resume-date text-md-right">
      <div className="text-primary">
        <ParagraphList content={dates} />
      </div>
    </div>
  </div>
);

export default ExperienceListing;