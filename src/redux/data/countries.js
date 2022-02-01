import axios from 'axios';

const GET_DATA_SUCCESS = 'covid-tracker/data/GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'covid-tracker/data/GET_DATA_FAILURE';
const baseURL = 'https://api.covid19tracking.narrativa.com';
const countriesURL = `${baseURL}/api/countries`;
const initialState = [];

export const getData = () => (dispatch) => axios.get(countriesURL).then(
  (response) => {
    const countries = Object.entries(response);
    const newCountries = [];
    for (let i = 0; i < countries[0][1].countries.length; i += 1) {
      const country = {
        name: countries[0][1].countries[i].name,
        link: `${baseURL}${countries[0][1].countries[i].links[0].href}`,
      };
      newCountries.push(country);
    }
    dispatch({ type: GET_DATA_SUCCESS, payload: newCountries });
  },
  (err) => dispatch({ type: GET_DATA_FAILURE, err }),
);

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};

export default countriesReducer;
