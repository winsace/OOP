document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const leaveType = document.getElementById('leaveType').value;
    const reason = document.getElementById('reason').value;

    if (!startDate || !endDate || !leaveType || !reason) {
        alert('Please fill in all fields.');
        return;
    }

    // Assuming success, generate unique leave ID
    const leaveId = generateLeaveId();

    // Display leave ID to user
    alert('Leave application successful. Your leave ID is: ' + leaveId);

    // Serialize form data to XML
    const xml = serializeToXML(startDate, endDate, leaveType, reason, leaveId);
    console.log(xml);

    // Clear form fields
    this.reset();
});

function generateLeaveId() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const date = String(currentDate.getDate()).padStart(2, '0');
    // Here you might want to fetch the current leave ID from a server and increment it
    const uniqueNumber = '0001'; // Increment this based on your actual implementation
    return 'leave' + year + month + date + '-' + uniqueNumber;
}

function serializeToXML(startDate, endDate, leaveType, reason, leaveId) {
    const xml = `
        <leave>
            <startDate>${startDate}</startDate>
            <endDate>${endDate}</endDate>
            <leaveType>${leaveType}</leaveType>
            <reason>${reason}</reason>
            <leaveId>${leaveId}</leaveId>
        </leave>
    `;
    return xml;
}
