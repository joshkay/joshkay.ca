import React, { useState } from 'react';
import Default from 'layouts/default';
import ProfileSection from 'components/sections/base/ProfileSection';
import ProfileSectionSeparator from 'components/sections/base/ProfileSectionSeparator';

import AboutSection from 'components/sections/AboutSection';
import PortfolioSection from 'components/sections/PortfolioSection';
import ExperienceSection from 'components/sections/ExperienceSection';
import EducationSection from 'components/sections/EducationSection';
import SkillsSection from 'components/sections/SkillsSection';
import ContactSection from 'components/sections/ContactSection';

import info from '../../data/info.json';

const IndexPage = () =>
{
  const getInitialVisibleSections = () =>
  {
    let visibleSections = new Array(info.sections.length);
    visibleSections[0] = info.sections[0].id;

    return visibleSections;
  }

  const [visibleSections, setVisibleSections] = useState(getInitialVisibleSections());

  const name = `${info.firstName} ${info.lastName}`;

  const handleSectionEnter = (section) =>
  {
    setVisibleSections(prevVisibleSections => {
      let visibleSections = [...prevVisibleSections];
      visibleSections[section.number] = section.id;
      
      return visibleSections;
    });
  }

  const handleSectionLeave = (section) =>
  {
    setVisibleSections(prevVisibleSections => {
      let visibleSections = [...prevVisibleSections];
      visibleSections[section.number] = undefined;
      
      return visibleSections;
    });
  }

  const getFocusedSection = () =>
  {
    console.log(visibleSections)
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

  const getSection = (section, index) =>
  {
    let separator = null;
    if (index < info.sections.length - 1)
    {
      separator = <ProfileSectionSeparator />;
    }

    return (
      <div key={index}>
        <ProfileSection 
          heading={section.header ? section.name : null} 
          id={section.id} 
          number={index}
          handleSectionEnter={handleSectionEnter}
          handleSectionLeave={handleSectionLeave}
        >
          {
            getSectionContent(section.id)
          }
        </ProfileSection>

        {separator}
      </div>
    );
  }

  const getSectionContent = (id) =>
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

  return (
    <Default 
      name={name} 
      logoImage={info.logoImage} 
      profileImage={info.profileImage} 
      sections={info.sections}
      focusedSection={getFocusedSection()}>
      {
        info.sections.map((section, index) => (
          getSection(section, index))
        )
      }
    </Default>
  );
};

export default IndexPage;