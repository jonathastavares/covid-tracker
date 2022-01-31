import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
  const data = useSelector((state) => state.narrativaReducer);
  console.log(data);
  return (<div>Test</div>);
};

export default Nav;
