document.addEventListener('DOMContentLoaded', function() {
    const sendMessageForm = document.getElementById('sendMessageForm');
    const inboxTable = document.getElementById('inboxTable');

    sendMessageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const recipient = document.getElementById('recipient').value;
        const subject = document.getElementById('messageSubject').value;
        const content = document.getElementById('messageContent').value;

        const newRow = inboxTable.insertRow();
        newRow.innerHTML = `
            <td>${inboxTable.rows.length}</td>
            <td>${recipient}</td>
            <td>${subject}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td><button class="btn btn-info">View</button></td>
        `;
    });

    inboxTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-info')) {
            const row = event.target.closest('tr');
            alert(`Message Content: ${row.cells[2].innerText}`);
        }
    });
});
