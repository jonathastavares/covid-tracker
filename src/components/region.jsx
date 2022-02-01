import React from 'react';
import PropTypes from 'prop-types';

const Region = ({ region }) => {
  console.log(region);
  return (
    <div>Region loaded!</div>
  );
};

Region.defaultProps = {
  region: {
    name: '',
    link: '',
  },
};
  
Region.propTypes = {
  region: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default Region;
