function resetForm() {
    document.getElementById("studentForm").reset();
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var studentId = document.getElementById("studentId").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Validate form data
    if (!studentId || !firstName || !lastName) {
        alert("Please fill in all fields.");
        return;
    }

    // Form data is valid, show success alert
    alert("Form submitted successfully!");

    // Create XML data
    var xmlData = `<student>
        <studentId>${studentId}</studentId>
        <firstName>${firstName}</firstName>
        <lastName>${lastName}</lastName>
    </student>`;

    // Store XML data into student.xml (You may need to use a server-side language for this part)
    // Example: Use AJAX to send XML data to a server and store it in student.xml
    // For demonstration, we'll just log the XML data to console
    console.log(xmlData);
});
