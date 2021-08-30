import PortfolioListing from 'components/listings/PortfolioListing';

const PortfolioSection = ({ section: { items }}) =>
(
  <div className="row">
    {
      items.map(({
        name, image, description, tools, githubUrl, siteUrl
      }, index) => (
        <PortfolioListing key={index} name={name} image={image}
          description={description} tools={tools}
          githubUrl={githubUrl} siteUrl={siteUrl}
        />
      ))
    }
  </div>
);

export default PortfolioSection;