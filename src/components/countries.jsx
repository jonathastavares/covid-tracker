import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getRegions } from '../redux/data/regions';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer);
  return (
    <div className="grid row">
      {countries.map((country) => {
        const data = getRegions(country.link);
        console.log(data);
        return (
          <Card key={country.name} className="col-sm-12 col-md-6 col-xl-3">
            <Card.Link href="/regions" className="links">
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Cases confirmed:</Card.Subtitle>
              </Card.Body>
            </Card.Link>
          </Card>
        );
      })}
    </div>
  );
};

export default Countries;
