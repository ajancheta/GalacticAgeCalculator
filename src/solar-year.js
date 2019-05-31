export default class SolarAgeCalculator {
  constructor(year) {
    this.year = year;
  }

  mercury(){
    let mercuryYear = 0.24;
    return (this.year * mercuryYear);
  }

  lifeExpMercury(){
    return(24 - this.year * 0.24);
  }

  venus(){
    let venusYear = 0.62;
    return (this.year*venusYear);
  }

  lifeExpVenus(){
    return(62 - this.year * 0.62);
  }

  mars(){
    let marsYear = 1.88;
    return (this.year * marsYear);
  }

  lifeExpMars(){
    return(188 - this.year * 1.88);
  }

  jupiter(){
    let jupiterYear = 11.86;
    return (this.year * jupiterYear);
  }

  lifeExpJupiter(){
    return(1186 - this.year * 11.86);
  }
}
