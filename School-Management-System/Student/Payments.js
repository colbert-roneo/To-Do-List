document.addEventListener('DOMContentLoaded', function() {
    const paymentsTable = document.getElementById('paymentsTable');
    const payments = [
        { id: 1, date: '2024-08-01', amount: '5000', status: 'Paid' },
        { id: 2, date: '2024-09-01', amount: '5000', status: 'Pending' }
    ];

    payments.forEach(payment => {
        const newRow = paymentsTable.insertRow();
        newRow.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.date}</td>
            <td>${payment.amount}</td>
            <td>${payment.status}</td>
            <td><button class="btn btn-info">View</button></td>
        `;
    });

    paymentsTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-info')) {
            const row = event.target.closest('tr');
            alert(`Payment Details: ${row.cells[2].innerText}`);
        }
    });
});
