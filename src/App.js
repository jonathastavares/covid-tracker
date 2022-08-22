import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { getData } from './redux/data/country';
import Regions from './components/regions';
import Details from './components/details';
import './App.css';

const baseURL = 'https://api.covid19tracking.narrativa.com';

function App() {
  const dispatch = useDispatch();
  const today = new Date();
  const year = today.getFullYear();
  const month = () => {
    if ((today.getMonth() + 1) < 10) {
      return `0${(today.getMonth() + 1)}`;
    }
    return (today.getMonth() + 1);
  };
  const day = () => {
    if (today.getDate() < 10) {
      return `0${today.getDate()}`;
    }
    return today.getDate();
  };
  const date = `${year}-${month()}-${day()}`;
  const link = `${baseURL}/api/${date}/country/brazil`;
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
    dispatch(getData(link));
  }, [show]);

  if (!show) {
    return (
      <div className="container load-container">
        <h1 className="fs-3 fw-bold text-center load-title">Loading content, please wait!</h1>
        <div className="Loading"> </div>
      </div>
    );
  }

  return (
    <Router>
      <nav className="d-flex justify-content-between mx-3">
        <ul className="list-unstyled link-container">
          <li className="h-100">
            <NavLink
              exact="true"
              to="/"
              className="links align-middle"
            >
              <AiOutlineHome className="fs-1 mt-3 text-white" />
            </NavLink>
          </li>
        </ul>
        <div>
          <h1 className="text-white fw-bold border border-2 border-white p-2 mt-2">Covid Tracker</h1>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Regions />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
