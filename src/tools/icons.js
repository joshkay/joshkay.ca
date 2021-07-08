import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJs,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import SVG from 'react-inlinesvg';

const getSVGElement = (name) =>
{
  name = name.replace('#', 'sharp');
  const path = `/images/logos/${name.toLowerCase()}.svg`;
  return (
    <SVG src={path}>
      <img src={path} type="image/svg+xml" />
    </SVG>
  );
};

const getFontAwesomeElement = (icon) =>
{
  return <FontAwesomeIcon icon={icon} />
}

export const getIconElement = (name) =>
{
  switch (name)
  {
    case 'React':
      return getFontAwesomeElement(faReact);
    //case 'Javascript':
     // return getFontAwesomeElement(faJs);
    case 'Python':
      return getFontAwesomeElement(faPython);
    case 'SQL':
      return getFontAwesomeElement(faDatabase);
    default:
      return getSVGElement(name);
  }
}