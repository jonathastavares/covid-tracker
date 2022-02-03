import countryReducer from '../redux/data/country';

describe('Testing country actions:', () => {
  test('should return the initial state', () => {
    expect(countryReducer(undefined, {})).toEqual([]);
  });
});
