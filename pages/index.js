import React from 'react';
import Default from '../src/layouts/default';
import ProfileSection from '../src/components/sections/profileSection';
import ProfileSectionSeparator from '../src/components/sections/profileSectionSeparator';

import AboutSection from '../src/components/sections/aboutSection';
import PortfolioSection from '../src/components/sections/portfolioSection';
import ExperienceSection from '../src/components/sections/experienceSection';
import EducationSection from '../src/components/sections/educationSection';
import SkillsSection from '../src/components/sections/skillsSection';
import ContactSection from '../src/components/sections/contactSection';

import info from '../src/info.json';

class IndexPage extends React.Component
{
  constructor(props)
  {
    super(props);

    this.name = `${info.firstName} ${info.lastName}`;

    this.state = {
      visibleSections: this.getInitialVisibleSections()
    };

    this.handleSectionEnter = this.handleSectionEnter.bind(this);
    this.handleSectionLeave = this.handleSectionLeave.bind(this);
    this.getFocusedSection = this.getFocusedSection.bind(this);
  }

  getInitialVisibleSections()
  {
    let visibleSections = new Array(info.sections.length);
    visibleSections[0] = info.sections[0].id;

    return visibleSections;
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

  getSection(section, index)
  {
    let separator = null;
    if (index < info.sections.length - 1)
    {
      separator = <ProfileSectionSeparator />;
    }

    return (
      <div key={index}>
        <ProfileSection heading={section.header ? section.name : null}  id={section.id} number={index}
          handleSectionEnter={this.handleSectionEnter}
          handleSectionLeave={this.handleSectionLeave}>
          {
            this.getSectionContent(section.id)
          }
        </ProfileSection>

        {separator}
      </div>
    );
  }

  getSectionContent(id)
  {
    const sectionInfo = info.sections.find((section) => section.id === id);

    switch(id)
    {
      case 'about':
        return <AboutSection section={sectionInfo}
          firstName={info.firstName} lastName={info.lastName} />
      case 'portfolio':
        return <PortfolioSection section={sectionInfo} />
      case 'experience':
        return <ExperienceSection section={sectionInfo} />
      case 'education':
        return <EducationSection section={sectionInfo} />
      case 'skills':
        return <SkillsSection section={sectionInfo} />
      case 'contact':
        return <ContactSection section={sectionInfo} />
    }
  }

  render()
  {
    return (
      <Default 
        name={this.name} 
        logoImage={info.logoImage} 
        profileImage={info.profileImage} 
        sections={info.sections}
        focusedSection={this.getFocusedSection()}>
        {
          info.sections.map((section, index) => (
            this.getSection(section, index))
          )
        }
      </Default>
    );
  }
};

export default IndexPage;