import React from 'react';
import PortfolioListing from '../portfolioListing';

export default ({section: {items}}) =>
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