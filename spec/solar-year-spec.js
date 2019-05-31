import SolarAgeCalculator from './../src/solar-year'

describe('Solar Age Calculator', function () {
  it('should test that the calculated Mercury age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.mercury()).toEqual(0.24);
  });

  it('should test that the calculated life expectancy for Mercury is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.lifeExpMercury()).toEqual(23.76);
  });

  it('should test that the calculated Venus age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.venus()).toEqual(0.62);
  });

  it('should test that the calculated life expectancy for Venus is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.lifeExpVenus()).toEqual(61.38);
  });

  it('should test that the calculated Mars age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.mars()).toEqual(1.88);
  });

  it('should test that the calculated life expectancy for Mars is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.lifeExpMars()).toEqual(186.12);
  });

  it('should test that the calculated Jupiter age is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.jupiter()).toEqual(11.86);
  });

  it('should test that the calculated life expectancy for Jupiter is correct', function () {
    let userAge = new SolarAgeCalculator(1);
    expect(userAge.lifeExpJupiter()).toEqual(1174.14);
  });
});
