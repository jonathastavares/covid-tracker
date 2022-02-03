import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { AiOutlineSearch } from 'react-icons/ai';
import Region from './region';
import './country.css';

const Regions = () => {
  const data = useSelector((state) => state.countryReducer);
  const [input, setInput] = useState('');
  const country = Object.values(data[0])[0];
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const filtered = data.slice(1).filter(
    (entry) => String(entry.name).toLowerCase().includes(String(input).toLowerCase()),
  );
  const regions = filtered;
  return (
    <div className="grid row">
      <Card key="Brazil" className="col-12 text-center country-card">
        <Card.Body>
          <Card.Title className="fw-bold text-white">{country.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-white">
            Total cases confirmed:
            <span className="fw-bold">
              {country.today_confirmed}
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-white">
            Cases confirmed today:
            <span className="fw-bold">
              {country.today_new_confirmed}
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-white">
            Deaths confirmed today:
            <span className="fw-bold">
              {country.today_new_deaths}
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-white">
            Information source:
            <span className="fw-bold">
              {country.source}
            </span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <div className="d-flex input-box">
        <AiOutlineSearch className="mt-1 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="input-box text-white border-0 w-100"
          onChange={handleChange}
          value={input}
        />
      </div>
      {regions.map((region) => (
        <Region
          key={region.name}
          region={region}
        />
      ))}
    </div>
  );
};

export default Regions;
