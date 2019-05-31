export default class SolarAgeCalculator {
  constructor(year) {
    this.year = year;
  }

  mercury(){
    const mercuryYear = 0.24;
    return (this.year*mercuryYear);
  }
}
