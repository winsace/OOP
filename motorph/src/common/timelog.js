// Function to update clock every second
function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    // Display only hours and minutes
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + meridiem;
  
    clock.textContent = timeString;
}

// Function to handle time in button click
document.getElementById('timeInBtn').addEventListener('click', function() {
    var timeInValue = document.getElementById('timeInValue');
    timeInValue.textContent = getCurrentTime();
    alert("Time In successful.");
});

// Function to handle time out button click
document.getElementById('timeOutBtn').addEventListener('click', function() {
    var timeOutValue = document.getElementById('timeOutValue');
    timeOutValue.textContent = getCurrentTime();
    alert("Time Out successful.");
});

// Function to handle form submission
document.getElementById('submitBtn').addEventListener('click', function() {
    var timeInValue = document.getElementById('timeInValue').textContent;
    var timeOutValue = document.getElementById('timeOutValue').textContent;
    if (timeInValue === '' || timeOutValue === '') {
        document.getElementById('error').textContent = "Please record both time in and time out.";
    } else {
        alert("Attendance Record Successful.");
        // Clear timesheet displays
        document.getElementById('timeInValue').textContent = '';
        document.getElementById('timeOutValue').textContent = '';
        document.getElementById('error').textContent = "";
    }
});

// Function to get current time (hours and minutes)
function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + meridiem;
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);
