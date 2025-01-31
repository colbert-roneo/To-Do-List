document.addEventListener('DOMContentLoaded', function() {
    const addUserForm = document.getElementById('addUserForm');
    const userTable = document.getElementById('userTable');

    addUserForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;
        const userRole = document.getElementById('userRole').value;

        const newRow = userTable.insertRow();
        newRow.innerHTML = `
            <td>${userTable.rows.length}</td>
            <td>${userName}</td>
            <td>${userEmail}</td>
            <td>${userRole}</td>
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        `;
    });

    userTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-danger')) {
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});
