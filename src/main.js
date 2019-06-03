import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import SolarAgeCalculator from './../src/solar-year';

$(document).ready(function(){
  $(".initialize").click(function(event){
    event.preventDefault();
    $(".solarCalc").fadeToggle();
    $(".result").fadeToggle();
    $(".initialize").hide();

  });

  $("#solarCalc").submit(function(event){
    event.preventDefault();
    $(".initialize").hide();

    let currentDate = new Date();
    let age = parseInt(currentDate.getFullYear()) - parseInt(($('#date').val()).slice(0, 4));
    let userInput = new SolarAgeCalculator(age);

    $("#mercuryAge").text(userInput.mercury());
    $("#venusAge").text(userInput.venus());
    $("#marsAge").text(userInput.mars());
    $("#jupiterAge").text(userInput.jupiter());

    $("#mercuryExpectancy").text(userInput.lifeExpMercury());
    $("#venusExpectancy").text(userInput.lifeExpVenus());
    $("#marsExpectancy").text(userInput.lifeExpMars());
    $("#jupiterExpectancy").text(userInput.lifeExpJupiter());

    if(userInput.lifeExpMercury() <= 0 || userInput.lifeExpVenus() <= 0 || userInput.lifeExpMars() <= 0 || userInput.lifeExpJupiter() <= 0) {
      $("#overlived").fadeToggle();
      $("#spaceship").fadeToggle();
      $("#yearsToLive").hide();
    }

    if(userInput.lifeExpMercury() >= 0 || userInput.lifeExpVenus() >= 0 || userInput.lifeExpMars() >= 0 || userInput.lifeExpJupiter() >= 0) {
      $("#yearsToLive").fadeToggle();
      $("#spaceship").fadeToggle();
      $("#overlived").hide();
    }
  });
});
