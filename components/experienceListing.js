import React from 'react';

export default ({ title, company, description, dates }) =>
(
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{title}</h3>
      <div className="subheading mb-3">{company}</div>
      <p>{description}</p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{dates}</span>
    </div>
  </div>
);