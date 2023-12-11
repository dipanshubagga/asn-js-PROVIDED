/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35;
var dayCounter = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function colorChangeDay(element) {
    if (!element.classList.contains('clicked')) {
      element.classList.add('clicked');
      dayCounter++;
    } else {
      element.classList.remove('clicked');
      dayCounter--;
    }

    calculateRate();
  }

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDates() {
    var dayButtons = document.querySelectorAll('.day-selector li');
    dayButtons.forEach(function (button) {
      button.classList.remove('clicked');
    });

    dayCounter = 0;
    calculateRate();
  }

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRate(type) {
    var fullButton = document.getElementById('full');
    var halfButton = document.getElementById('half');

    if (type === 'full') {
      dailyRate = 35;
      fullButton.classList.add('clicked');
      halfButton.classList.remove('clicked');
    } else if (type === 'half') {
      dailyRate = 20;
      halfButton.classList.add('clicked');
      fullButton.classList.remove('clicked');
    }

    calculateRate();
  }

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateRate() {
    var calculatedCost = document.getElementById('calculated-cost');
    var totalCost = dayCounter * dailyRate;
    calculatedCost.textContent = totalCost;
  }