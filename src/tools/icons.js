import SVG from 'react-inlinesvg';
import { 
  FaReact,
  FaPython,
  FaDatabase,
  FaSass,
  FaJava,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiCplusplus,
  SiFirebase,
  SiUnrealengine,
  SiDotNet
 } from "react-icons/si";
import {
  Icon,
  Image
} from '@chakra-ui/react';
import { forwardRef } from 'react';

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
  'C++': SiCplusplus,
  'Github': FaGithub,
  'Firebase': SiFirebase,
  'Unreal Engine': SiUnrealengine,
  ".NET": SiDotNet,
}

const IconElement = forwardRef(({ name, ...props }, ref) =>
{
  const IconComponent = ICON_ELEMENTS[name];
  if (IconComponent)
  {
    return (
      <div
        ref={ref} 
      >
        <Icon
          as={IconComponent} 
          {...props} 
        />
      </div>
    );
  }

  return (
    <div
      ref={ref} 
    >
      <Icon
        as={SVGElement}
        name={name}
        {...props} 
      />
    </div>
  );
});
IconElement.displayName = 'IconElement';

export { IconElement };