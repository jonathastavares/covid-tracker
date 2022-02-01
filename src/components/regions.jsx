import React from 'react';
import PropTypes from 'prop-types';

const Regions = ({ regions }) => {
  console.log(regions);
  return (
    <div>Regions loaded!</div>
  );
};

Regions.defaultProps = {
  mission: {
    name: '',
    link: '',
  },
};

Regions.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default Regions;
