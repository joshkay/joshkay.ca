import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { getIconElement } from '../../tools/icons';

export default ({ languages, libraries, workflow }) =>
{
  const softwareList = (list) => list.map((listEntry, index) =>
  (
    <li key={index} className="list-inline-item">
      { getIconElement(listEntry) }
      <p>{ listEntry }</p>
    </li>
  ));

  const workflowList = workflow.map((workflowEntry, index) =>
  (
    <li key={index}>
      <FontAwesomeIcon icon={faCheck} />
      { workflowEntry }
    </li>
  ));

  return (
    <div>
      <div className="subheading mb-3">Languages</div>
      <ul className="list-inline dev-icons">
        {softwareList(languages)}
      </ul>

      <div className="subheading mb-3">Libraries</div>
      <ul className="list-inline dev-icons">
        {softwareList(libraries)}
      </ul>

      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0 dev-workflow">
        {workflowList}
      </ul>
    </div>
  );
};