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
  SiUnrealengine
 } from "react-icons/si";
import {
  Flex,
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
  //".NET": SiDotNet,
}

const SVG_ELEMENTS = [
  'Home Assistant',
]

const IconElement = forwardRef(({ name, ...props }, ref) =>
{
  const IconComponent = ICON_ELEMENTS[name];
  if (IconComponent)
  {
    return (
      <Flex
        ref={ref}
      >
        <Icon
          as={IconComponent} 
          {...props} 
        />
      </Flex>
    );
  }

  if (SVG_ELEMENTS.includes(name))
  {
    return (
      <Flex
        ref={ref} 
      >
        <Icon
          as={SVGElement}
          name={name}
          {...props} 
        />
      </Flex>
    );
  }
  
  return null;
});

IconElement.displayName = 'IconElement';

export { IconElement };