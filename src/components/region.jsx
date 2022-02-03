import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Region = ({ region }) => {
  const {
    name,
  } = region;
  const totalConfirmed = region.today_confirmed;
  if ((region.id % 3) === 0) {
    return (
      <Card key={name} id="card" className="col-6 col-xl-3 text-center">
        <Link to="/details" className="links align-middle" state={{ region }}>
          <Card.Body>
            <Card.Title className="fw-bold text-white">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-white">
              Total cases:
              <span className="fw-bold">
                {totalConfirmed}
              </span>
            </Card.Subtitle>
          </Card.Body>
        </Link>
      </Card>
    );
  }
  return (
    <Card key={name} id="card" className="col-6 col-xl-3 text-center card-dark">
      <Link to="/details" className="links align-middle" state={{ region }}>
        <Card.Body>
          <Card.Title className="fw-bold text-white">{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-white">
            Total cases:
            <span className="fw-bold">
              {totalConfirmed}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>
  );
};

Region.defaultProps = {
  region: {
    name: '',
    todayConfirmed: '',
  },
};
Region.propTypes = {
  region: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }),
};
export default Region;
