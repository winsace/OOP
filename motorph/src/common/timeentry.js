document.addEventListener("DOMContentLoaded", function () {
    const currentDateTimeDisplay = document.getElementById("currentDateTime");
    const timeInButton = document.getElementById("timeInButton");
    const timeOutButton = document.getElementById("timeOutButton");

    // Function to update the current date and time display
    function updateDateTime() {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        currentDateTimeDisplay.textContent = `${dateString} | ${timeString}`;
    }

    // Set interval to update the date and time every second
    setInterval(updateDateTime, 1000);

    // Event listener for Time In button
    timeInButton.addEventListener('click', function () {
        const currentTime = new Date();
        const dateString = currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const timeString = currentTime.toLocaleTimeString('en-US', { hour12: true });
        const message = `${dateString} | ${timeString} | Time In successfully submitted`;
        alert(message);
    });

    // Event listener for Time Out button
    timeOutButton.addEventListener('click', function () {
        const currentTime = new Date();
        const dateString = currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const timeString = currentTime.toLocaleTimeString('en-US', { hour12: true });
        const message = `${dateString} | ${timeString} | Time Out successfully submitted`;
        alert(message);
    });
});
