import axios from 'axios';

const GET_REGIONS_SUCCESS = 'covid-tracker/data/GET_DATA_SUCCESS';
const GET_REGIONS_FAILURE = 'covid-tracker/data/GET_DATA_FAILURE';
const initialState = [];

export const getRegions = (link) => (dispatch) => axios.get(link).then(
  (response) => {
    const regions = Object.entries(response);
    dispatch({ type: GET_REGIONS_SUCCESS, payload: regions });
  },
  (err) => dispatch({ type: GET_REGIONS_FAILURE, err }),
);

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS_SUCCESS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};

export default regionsReducer;
