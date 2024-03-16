document.addEventListener("DOMContentLoaded", function() {
  const ticketForm = document.getElementById("ticketForm");
  const dateInput = document.getElementById("date");

  // Set the value of the date input field to today's date
  const today = new Date().toISOString().slice(0, 10);
  dateInput.value = today;

  ticketForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(ticketForm);
    const date = formData.get("date");
    const assignTeam = formData.get("assignTeam");
    const severity = formData.get("severity");
    const subject = formData.get("subject");
    const description = formData.get("description");

    if (!date || !assignTeam || !severity || !subject || !description) {
      alert("Please fill in all fields");
      return;
    }

    const ticketId = generateTicketId(date);
    alert(`Ticket submitted successfully! Ticket ID: ${ticketId}`);
    ticketForm.reset();
  });
});

function generateTicketId(date) {
  const formattedDate = date.replaceAll("-", "");
  const currentDate = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  let count = 1;

  if (formattedDate === currentDate) {
    count = parseInt(localStorage.getItem("ticketCount") || 0) + 1;
  } else {
    localStorage.setItem("ticketCount", 1);
  }

  const paddedCount = count.toString().padStart(4, "0");
  localStorage.setItem("ticketCount", count);
  return `${formattedDate}-${paddedCount}`;
}
