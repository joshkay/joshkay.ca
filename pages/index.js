import React from 'react';
import Default from '../layouts/default';
import ProfileSection from '../components/profileSection';
import ProfileSectionSeparator from '../components/profileSectionSeparator';
import ExperienceListing from '../components/experienceListing';
import SkillsListing from '../components/skillsListing';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faNpm,
  faJava
} from '@fortawesome/free-brands-svg-icons';

import '../scss/styles.scss';

class IndexPage extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      visibleSections: new Array(this.getSections().length)
    };

    this.handleSectionEnter = this.handleSectionEnter.bind(this);
    this.handleSectionLeave = this.handleSectionLeave.bind(this);
    this.getFocusedSection = this.getFocusedSection.bind(this);
  }

  handleSectionEnter(section)
  {
    this.setState((prevState) =>
    {
      let { visibleSections } = prevState;
      visibleSections[section.number] = section.id;
      
      return {
        visibleSections
      };
    });
  }

  handleSectionLeave(section)
  {
    this.setState((prevState) =>
    {
      let { visibleSections } = prevState;
      visibleSections[section.number] = undefined;
      
      return {
        visibleSections
      };
    });
  }

  getFocusedSection()
  {
    const { visibleSections } = this.state;
    if (visibleSections !== undefined)
    {
      for (let i = 0; i < visibleSections.length; i++)
      {
        const id = visibleSections[i];
        if (id !== undefined)
        {
          return id;
        }
      }
    }
  }

  getSections()
  {
    return [
      {
        id: 'about',
        name: 'About'
      },
      {
        id: 'experience',
        name: 'Experience'
      },
      {
        id: 'education',
        name: 'Education'
      },
      {
        id: 'skills',
        name: 'Skills'
      }
    ];
  }

  render()
  {
    const firstName = "Josh";
    const lastName = "Kay";
    const name = `${firstName} ${lastName}`;

    const email = "josh.m.kay@gmail.com";
    const phoneNumber = "(416) 464-4510";
    const description = "I am a web developer who has a passion for creating easy to use software.";

    const github = "https://github.com/joshkay";
    const linkedIn = "https://www.linkedin.com/in/joshmkay";
    const twitter = "https://twitter.com/joshmkay";

    const experience = [
      {
        title: 'Contractor',
        company: 'MARCOMM Integrated Business Solutions',
        description: '',
        dates: 'Apr 2018 - Present'
      },
      {
        title: 'Executive Vice President',
        company: 'Hailstone Games',
        description: '',
        dates: 'Jan 2017 - Apr 2018'
      },
      {
        title: 'Software Engineer',
        company: 'OSnap! Games',
        description: '',
        dates: 'Jan 2015 - Jan 2017'
      },
      {
        title: 'Contractor',
        company: 'MMARCOMM Integrated Business Solutions',
        description: 'Contracted by Apotex Inc. to develop web software that managed data centers, cabling, work orders, inventory and more.  Worked with SQL, VB, and ASP.NET. ',
        dates: 'May 2011 - Dec 2012'
      }
    ];

    const education = [
      {
        title: 'Bloc',
        company: 'Full Stack Web Development Certification',
        description: '',
        dates: 'Apr 2018 - Present'
      },
      {
        title: 'George Brown College',
        company: 'Game Programming Diploma',
        description: 'With Honours',
        dates: 'Jan 2013 - Apr 2016'
      }
    ];

    const software = [
      { icon: faHtml5 },
      { icon: faCss3Alt },
      { icon: faJsSquare },
      { icon: faReact },
      { icon: faNodeJs },
      { icon: faSass },
      { icon: faNpm },
      { icon: faJava }
    ];

    const workflow = [
      'Test Driven Development',
      'Mobile-First, Responsive Design',
      'Thorough Debugging',
      'Agile Development &amp; Scrum'
    ];

    const experienceList = experience.map((experienceEntry, index) =>
    {
      return <ExperienceListing
        key={index}
        title={experienceEntry.title}
        company={experienceEntry.company}
        description={experienceEntry.description}
        dates={experienceEntry.dates}
      />
    });
    
    const educationList = education.map((educationEntry, index) =>
    {
      return <ExperienceListing
        key={index}
        title={educationEntry.title}
        company={educationEntry.company}
        description={educationEntry.description}
        dates={educationEntry.dates}
      />
    });

    const sections = this.getSections();

    return (
      <Default name={name} image="/static/profile.png" sections={sections}
        focusedSection={this.getFocusedSection()}>

        <ProfileSection id={sections[0].id} number={0}
          handleSectionEnter={this.handleSectionEnter}
          handleSectionLeave={this.handleSectionLeave}>
          <h1 className="mb-0">{`${firstName} `}
            <span className="text-primary">{lastName}</span>
          </h1>
          <div className="mb-5">{`${phoneNumber} · `} 
            <a href="mailto:name@email.com">{email}</a>
          </div>
          <p className="lead mb-5">{description}</p>
          <div className="social-icons">
            <a href={linkedIn} target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </ProfileSection>

        <ProfileSectionSeparator />

        <ProfileSection heading="Experience" id={sections[1].id} number={1}
          handleSectionEnter={this.handleSectionEnter}
          handleSectionLeave={this.handleSectionLeave}>
        {
          experienceList
        }
        </ProfileSection>

        <ProfileSectionSeparator />

        <ProfileSection heading="Education" id={sections[2].id} number={2}
          handleSectionEnter={this.handleSectionEnter}
          handleSectionLeave={this.handleSectionLeave}>
        {
          educationList
        }
        </ProfileSection>

        <ProfileSectionSeparator />

        <ProfileSection heading="Skills" id={sections[3].id} number={3}
          handleSectionEnter={this.handleSectionEnter}
          handleSectionLeave={this.handleSectionLeave}>
          <SkillsListing
            software={software}
            workflow={workflow}
          />
        </ProfileSection>
      </Default>
    );
  }
};

export default IndexPage;