export default class SolarAgeCalculator {
  constructor(year) {
    this.year = year;
  }

  mercury(){
    let mercuryYear = 0.24;
    return (this.year*mercuryYear);
  }

  venus(){
    let venusYear = 0.62;
    return (this.year*venusYear);
  }

  mars(){
    let marsYear = 1.88;
    return (this.year*marsYear);
  }

  jupiter(){
    let jupiterYear = 11.86;
    return (this.year*jupiterYear);
  }
}
