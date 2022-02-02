import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const info = useLocation();
  const {
    name,
    source,
  } = info.state.region;
  const todayNewConfirmed = info.state.region.today_new_confirmed;
  const todayNewDeaths = info.state.region.today_new_deaths;
  const totalConfirmed = info.state.region.today_confirmed;
  return (
    <Card key={name} className="col-sm-12 col-lg-6 col-xl-3 text-center">
      <Card.Body>
        <Card.Title className="fw-bold text-white">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-white">
          Total cases confirmed:
          <span className="fw-bold">
            {totalConfirmed}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-white">
          Cases confirmed today:
          <span className="fw-bold">
            {todayNewConfirmed}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-white">
          Deaths confirmed today:
          <span className="fw-bold">
            {todayNewDeaths}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-white">
          Information source:
          <span className="fw-bold">
            {source}
          </span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
export default Details;
