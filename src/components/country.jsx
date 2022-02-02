import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Country = () => {
  const data = useSelector((state) => state.countryReducer);
  const country = Object.values(data[0])[0];
  return (
    <div className="grid row">
      <Card key="Brazil" className="col-12 text-center">
        <Card.Link href="/regions" className="links">
          <Card.Body>
            <Card.Title>{country.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Cases confirmed:
              <span className="fw-bold">
                {country.today_new_confirmed}
              </span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Cases confirmed deaths:
              <span className="fw-bold">
                {country.today_new_deaths}
              </span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Information source:
              <span className="fw-bold">
                {country.source}
              </span>
            </Card.Subtitle>
          </Card.Body>
        </Card.Link>
      </Card>
    </div>
  );
};

export default Country;
