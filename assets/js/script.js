// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

// TODO: Add code to display the current date in the header of the page.
$(function () {
  // dayjs object for today
var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').text(today)
});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

document.querySelector('.saveBtn').addEventListener("click", function() {
  var userData = this.siblings("description").val()
  var timeBlock = this.parent().attr('id').split("-") [1]
  console.log(userData,timeBlock)
  localStorage.setItem(timeBlock,userData)
});
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // loop for past, present, and future
    // for (let hour = 10; hour <= 24; hour++) {
      // const time = dayjs().hour(hour);
    
      // if (time.isBefore(dayjs(), 'hour')) {
        // document.querySelector(`#hour-${hour}am`).classList.add('past');
      // } else if (time.isSame(dayjs(), 'hour')) {
        // document.querySelector(`#hour-${hour}am`).classList.add('present');
      // } else {
        // document.querySelector(`#hour-${hour}am`).classList.add('future');
      // }
    // }

    for (let hour = 9; hour <= 11; hour++) {
      const amTimeBlock = document.querySelector(`#hour-${hour}am`);
      const pmTimeBlock = document.querySelector(`#hour-${hour}pm`);
      
      const time = dayjs().hour(hour);
    
      if (amTimeBlock) {
        if (time.isBefore(dayjs(), 'hour')) {
          amTimeBlock.classList.add('past');
        } else if (time.isSame(dayjs(), 'hour')) {
          amTimeBlock.classList.add('present');
        } else {
          amTimeBlock.classList.add('future');
        }
      }
    
      if (pmTimeBlock) {
        if (time.isBefore(dayjs(), 'hour')) {
          pmTimeBlock.classList.add('past');
        } else if (time.isSame(dayjs(), 'hour')) {
          pmTimeBlock.classList.add('present');
        } else {
          pmTimeBlock.classList.add('future');
        }
      }
    }

    var saveBtn = document.querySelector('.saveBtn');

    if (saveBtn) {
      // The saveBtn element exists in the DOM
      console.log("saveBtn exists");
    } else {
      // The saveBtn element does not exist in the DOM
      console.log("saveBtn does not exist");
    }

 // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.description').addEventListener("click", function() {
      var userData = this.value;
      var timeBlock = this.parentNode.id.split("-")[1];
      console.log(userData, timeBlock);
      localStorage.setItem(timeBlock, userData);
    });
  
    document.querySelector('.saveBtn').addEventListener("click", function() {
      window.print();
      alert("Your schedule is now being printed and refreshed.");
      localStorage.clear();
    });
  });





  
 

