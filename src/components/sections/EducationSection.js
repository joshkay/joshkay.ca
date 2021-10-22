import TimelineContainer from 'components/timeline/TimelineContainer';
import TimelineEntry from 'components/timeline/Timelineitem';

const EducationSection = ({section: {items}}) =>
(
  <TimelineContainer>
  {
    items.map(({
      school, 
      credential, 
      description, 
      dates
    }, index) =>
    (
      <TimelineEntry 
        key={index} 
        title={`${school} - ${credential}`}
        description={description} 
        dates={dates}
      />
    ))
  }
  </TimelineContainer>
);

export default EducationSection;