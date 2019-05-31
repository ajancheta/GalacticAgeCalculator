import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import SolarAgeCalculator from './../src/solar-year';

$(document).ready(function(){
  $("#solarCalc").submit(function(event){
    event.preventDefault();

    let currentDate = new Date();
    let age = parseInt(currentDate.getFullYear()) - parseInt(($('#date').val()).slice(0, 4));
    let userInput = new SolarAgeCalculator(age);

    $("#mercury").text(userInput.mercury());
    $("#venus").text(userInput.venus());
    $("#mars").text(userInput.mars());
    $("#jupiter").text(userInput.jupiter());

    $("#mercuryExpectancy").text(userInput.lifeExpMercury());
    $("#venusExpectancy").text(userInput.lifeExpVenus());
    $("#marsExpectancy").text(userInput.lifeExpMars());
    $("#jupiterExpectancy").text(userInput.lifeExpJupiter());

    if(userInput.lifeExpMercury() <= 0 || userInput.lifeExpVenus() <= 0 || userInput.lifeExpMars() <= 0 || userInput.lifeExpJupiter() <= 0) {
      $("#yearsPast").show();
      $("#yearsLeft").hide();
    }
  });
});
