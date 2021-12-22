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
import { Box, Heading, VStack } from '@chakra-ui/react';

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
    if (visibleSections !== undefined)
    {
      for (let i = visibleSections.length - 1; i >= 0; i--)
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
          heading={section.header ? section.heading ? section.heading : section.name : null} 
          id={section.id} 
          number={index}
          handleSectionEnter={handleSectionEnter}
          handleSectionLeave={handleSectionLeave}
        >
          {
            section.sections ? (
              <VStack
                alignItems="flex-start"
                spacing={8}
              >
              {
                section.sections.map(((subSection, subIndex) => (
                  <Box 
                    key={`${index}${subIndex}`}
                    width="100%"
                  >
                    <Heading 
                      as="h3" 
                      mb={4}
                    >
                      {subSection}
                    </Heading>
                    {
                      getSectionContent(section.id, subSection)
                    }
                  </Box>
                )))
              }                
              </VStack>
            ) : getSectionContent(section.id)
          }
        </ProfileSection>

        {separator}
      </div>
    );
  }

  const getSectionContent = (id, subSection) =>
  {
    let sectionInfo = {...info.sections.find((section) => section.id === id)};

    if (subSection)
    {
      sectionInfo.items = [...sectionInfo.items.filter(
        (item) => item.sections.includes(subSection)
      )];
    }

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