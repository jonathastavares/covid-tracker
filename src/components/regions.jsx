import React from 'react';
import { useSelector } from 'react-redux';
import Region from './region';

const Regions = () => {
  const data = useSelector((state) => state.countryReducer);
  return (
    <div className="grid row">
      {data.slice(1).map((region) => (
        <Region key={region.name} region={region} />
      ))}
    </div>
  );
};

export default Regions;
