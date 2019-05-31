import SolarAgeCalculator from './../src/solar-year'

describe('Solar Age Calculator', function () {
  it('should test that the calculated Mercury age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.mercury()).toEqual(0.24);
  });

  it('should test that the calculated Venus age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.venus()).toEqual(0.62);
  });

  it('should test that the calculated Mars age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.mars()).toEqual(1.88);
  });

  it('should test that the calculated Jupiter age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.jupiter()).toEqual(11.86);
  });
});
