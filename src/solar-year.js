export default class SolarAgeCalculator {
  constructor(year) {
    this.year = year;
  }

  mercury(){
    let mercuryYear = 0.24;
    return ((this.year * mercuryYear).toFixed(2));
  }

  lifeExpMercury(){
    return((24 - this.year * 0.24).toFixed(2));
  }

  venus(){
    let venusYear = 0.62;
    return ((this.year*venusYear).toFixed(2));
  }

  lifeExpVenus(){
    return((62 - this.year * 0.62).toFixed(2));
  }

  mars(){
    let marsYear = 1.88;
    return((this.year * marsYear).toFixed(2));
  }

  lifeExpMars(){
    return((188 - this.year * 1.88).toFixed(2));
  }

  jupiter(){
    let jupiterYear = 11.86;
    return((this.year * jupiterYear).toFixed(2));
  }

  lifeExpJupiter(){
    return((1186 - this.year * 11.86).toFixed(2));
  }
}
