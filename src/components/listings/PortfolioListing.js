import { Card, Button, CardHeader, CardFooter, CardBody,
  CardImg, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
  faReact
} from '@fortawesome/free-brands-svg-icons';

import { getIconElement } from '../../tools/icons';

const PortfolioListing = ({ name, image, description, tools, githubUrl, siteUrl }) =>
(
  <div className="col-sm-6 col-lg-6 col-xl-4 mb-3">
    <Card>
      <CardHeader><h3 className="m-0">{name}</h3></CardHeader> 
      <CardImg top width="100%" src={image} alt={`Portfolio image for ${name}`} />
      <CardBody>
        <h4>About</h4>
        <CardText>{description}</CardText>

        <div className="d-flex align-items-center">
          <h4 className="m-0 pr-2">Built with</h4>
          {
            tools.map((tool, index) =>
            (
              <div key={index} title={tool} className="portfolio-icon">
                {getIconElement(tool)}
              </div>
            ))
          }   
        </div>
      </CardBody>

      <CardFooter>
        <div className="portfolio-item-links d-flex flex-row align-items-center p-10">
          <Button href={siteUrl} target="_blank" className="w-100">View Site</Button>
          <div className="social-icons">
            <a href={githubUrl} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  </div>
);

export default PortfolioListing;