import SolarAgeCalculator from './../src/solar-year'

describe('Mercury', function () {
  it('should test that the calculated Mercury age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.mercury()).toEqual(0.24);
  });
});
