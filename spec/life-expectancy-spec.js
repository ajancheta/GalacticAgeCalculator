import LifespanCalculator from './../src/life-expectancy.js';

describe('Lifespan Calculator', function() {

    it('should test that the calculated BMI is correct', function() {
      let height = 60;
      let weight = 110;
      let calculateBMI = ((weight / (height * height)) * 703).toFixed(2));
      expect(calculateBMI).toEqual('21.48');
    });
  });
