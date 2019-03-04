import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default ({ software, workflow }) =>
{
  const softwareList = software.map((softwareEntry, index) =>
  (
    <li key={index} className="list-inline-item">
      <FontAwesomeIcon icon={softwareEntry.icon} />
    </li>
  ));

  const workflowList = workflow.map((workflowEntry, index) =>
  (
    <li key={index}>
      <FontAwesomeIcon icon={faCheck} />
      {workflowEntry}
    </li>
  ));


  return (
    <div>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline dev-icons">
        {softwareList}
      </ul>

      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0 dev-workflow">
        {workflowList}
      </ul>
    </div>
  );
};