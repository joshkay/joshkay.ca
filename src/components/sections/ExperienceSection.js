import TimelineContainer from 'components/timeline/TimelineContainer';
import TimelineEntry from 'components/timeline/Timelineitem';

const ExperienceSection = ({section: {items}}) =>
(
  <TimelineContainer>
  {
    items.map(({
      title, 
      company, 
      description, 
      dates
    }, index) =>
    (
      <TimelineEntry 
        key={index} 
        title={`${company} - ${title}`}
        description={description} 
        dates={dates}
      />
    ))
  }
  </TimelineContainer>
);

export default ExperienceSection;