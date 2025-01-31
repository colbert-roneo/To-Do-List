document.addEventListener('DOMContentLoaded', function() {
    const addTransactionForm = document.getElementById('addTransactionForm');
    const transactionsTable = document.getElementById('transactionsTable');

    addTransactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const transactionDate = document.getElementById('transactionDate').value;
        const transactionAmount = document.getElementById('transactionAmount').value;
        const transactionType = document.getElementById('transactionType').value;
        const transactionStatus = document.getElementById('transactionStatus').value;

        const newRow = transactionsTable.insertRow();
        newRow.innerHTML = `
            <td>${transactionsTable.rows.length}</td>
            <td>${transactionDate}</td>
            <td>${transactionAmount}</td>
            <td>${transactionType}</td>
            <td>${transactionStatus}</td>
            <td><button class="btn btn-info">View</button></td>
        `;
    });

    transactionsTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-info')) {
            const row = event.target.closest('tr');
            alert(`Transaction Details: ${row.cells[2].innerText}`);
        }
    });
});
