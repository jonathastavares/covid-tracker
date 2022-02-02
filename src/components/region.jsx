import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Region = ({ region }) => {
  const {
    name,
    source,
  } = region;
  const todayNewConfirmed = region.today_new_confirmed;
  const todayNewDeaths = region.today_new_deaths;
  return (
    <Card key={name} className="col-sm-12 col-lg-6 col-xl-3 text-center">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Cases confirmed:
          <span className="fw-bold">
            {todayNewConfirmed}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Cases confirmed deaths:
          <span className="fw-bold">
            {todayNewDeaths}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Information source:
          <span className="fw-bold">
            {source}
          </span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

Region.defaultProps = {
  region: {
    name: '',
    todayNewConfirmed: '',
    todayNewDeaths: '',
    source: '',
  },
};
Region.propTypes = {
  region: PropTypes.shape({
    name: PropTypes.string,
    todayNewConfirmed: PropTypes.number,
    today_new_confirmed: PropTypes.number,
    today_new_deaths: PropTypes.number,
    todayNewDeaths: PropTypes.number,
    source: PropTypes.string,
  }),
};
export default Region;
