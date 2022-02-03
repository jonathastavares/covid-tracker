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
  const todayDeaths = info.state.region.today_deaths;
  const todayNewOpenCases = info.state.region.today_new_open_cases;
  const todayNewRecovered = info.state.region.today_new_recovered;
  return (
    <div>
      <Card key={name} className="col-12 text-center details-card">
        <Card.Body>
          <Card.Title className="fw-bold text-white">{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-white">
            Information source:
            <span className="fw-bold">
              {source}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayDeaths" className="col-12 text-center card-dark">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Total cases confirmed:
            <span className="fw-bold">
              {totalConfirmed}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayDeaths" className="col-12 text-center">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Total deaths confirmed:
            <span className="fw-bold">
              {todayDeaths}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayNewConfirmed" className="col-12 text-center card-dark">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Today new cases confirmed:
            <span className="fw-bold">
              {todayNewConfirmed}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayNewDeaths" className="col-12 text-center">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Today new deaths confirmed:
            <span className="fw-bold">
              {todayNewDeaths}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayNewOpenCases" className="col-12 text-center card-dark">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Today new open cases:
            <span className="fw-bold">
              {todayNewOpenCases}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Card key="todayNewRecovered" className="col-12 text-center">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-white">
            Today new recovered cases:
            <span className="fw-bold">
              {todayNewRecovered}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Details;
