// JavaScript to handle the view button
document.getElementById('viewButton').addEventListener('click', function() {
    // Open pop out window for viewing payslip (not implemented in this example)
    // You can implement your logic to open a pop out window here
    window.open('payslip.html', '_blank', 'width=600,height=400');
});

// JavaScript to handle the download button
document.getElementById('downloadButton').addEventListener('click', function() {
    // Show alert for successful download
    alert("Successfully Downloaded.");
});
