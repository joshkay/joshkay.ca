const ParagraphList = ({ content }) => (
  Array.isArray(content) ? content.map((item, index) => (
    <p key={index}>{item}</p>
  )) : (
    <p>{content}</p>
  )
);

export default ParagraphList;