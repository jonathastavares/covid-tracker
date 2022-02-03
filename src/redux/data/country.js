import axios from 'axios';

const GET_DATA_SUCCESS = 'covid-tracker/data/GET_DATA_SUCCESS';
const initialState = [];

export const getData = (countryURL) => (dispatch) => axios.get(countryURL).then(
  (response) => {
    const res = Object.entries(response);
    const payload = res[0][1].dates;
    const country = Object.values(payload)[0].countries;
    const { regions } = Object.values(country)[0];
    for (let i = 0; i < regions.length; i += 1) {
      regions[i].id = i;
    }
    dispatch({ type: GET_DATA_SUCCESS, country: [country], regions });
  },
);

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return [
        ...action.country,
        ...action.regions,
      ];
    default:
      return state;
  }
};

export default countryReducer;
