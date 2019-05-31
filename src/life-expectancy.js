export default class LifespanCalculator {
  constructor(weight, height, exercise, petParent) {
    this.weight = weight;
    this.height = height;
    this.exercise = exercise;
    this.petParent = petParent;
  }

  calculateBMI() {
    return ((this.weight / (this.height * this.height)) * 703).toFixed(2));
  }
}
