import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Nav from './components/nav';
import { getData } from './redux/data/narrativa';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Nav />
  );
}

export default App;
