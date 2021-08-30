import SVG from 'react-inlinesvg';
import { 
  FaReact,
  FaPython,
  FaDatabase,
  FaSass,
  FaJava
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiCplusplus
 } from "react-icons/si";
import {
  Icon,
  Image
} from '@chakra-ui/react';

const SVGElement = ({ name, ...props }) =>
{
  name = name.replace('#', 'sharp');
  const path = `/images/logos/${name.toLowerCase()}.svg`;
  
  return (
    <SVG src={path} {...props}>
      <Image alt={name} src={path} type="image/svg+xml" />
    </SVG>
  );
};

const ICON_ELEMENTS = {
  'React': FaReact,
  'Python': FaPython,
  'SQL': FaDatabase,
  'Javascript': SiJavascript,
  'Typescript': SiTypescript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'SASS': FaSass,
  'Java': FaJava,
  'C#': SiCsharp,
  'C++': SiCplusplus
}

export const IconElement = ({ name, ...props }) =>
{
  const IconComponent = ICON_ELEMENTS[name];
  if (IconComponent)
  {
    return <Icon as={IconComponent} {...props} />;
  }
  return <SVGElement name={name} {...props} />;
}