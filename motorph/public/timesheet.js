// Get current date
let currentDate = new Date();

// Display initial month and year
displayMonthYear(currentDate);

// Render timesheet for current month
renderTimesheet(currentDate);

// Previous month button event listener
document.getElementById('prevMonthBtn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    displayMonthYear(currentDate);
    renderTimesheet(currentDate);
});

// Next month button event listener
document.getElementById('nextMonthBtn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    displayMonthYear(currentDate);
    renderTimesheet(currentDate);
});

// Function to display month and year
function displayMonthYear(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById('currentMonthYear').textContent = `${month} ${year}`;
}

// Function to render timesheet for a given month
function renderTimesheet(date) {
    const timesheetBody = document.getElementById('timesheetBody');
    timesheetBody.innerHTML = '';

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dateOfMonth = new Date(date.getFullYear(), date.getMonth(), i);
        const formattedDate = formatDate(dateOfMonth);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="border px-4 py-2">${formattedDate}</td>
            <td class="border px-4 py-2"><input type="time" class="w-full"></td>
            <td class="border px-4 py-2"><input type="time" class="w-full"></td>
            <td class="border px-4 py-2">Total hours will be calculated here</td>
        `;
        timesheetBody.appendChild(tr);
    }
}

// Function to format date as "YYYY-MM-DD"
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
