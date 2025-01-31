document.addEventListener('DOMContentLoaded', function() {
    // Example: Displaying a welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    const studentName = 'John Doe'; // Replace with dynamic data
    welcomeMessage.textContent = `Welcome, ${studentName}!`;

    // Example: Displaying upcoming events
    const eventsList = document.getElementById('eventsList');
    const events = [
        { date: '2024-09-20', event: 'Math Exam' },
        { date: '2024-09-25', event: 'Science Fair' }
    ];

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.date}: ${event.event}`;
        eventsList.appendChild(listItem);
    });
});
