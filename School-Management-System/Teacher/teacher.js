function profile(){
    alert("Profile Updated")
}
function classes(){
    alert("Schedule Updated")
}
function grade(){
    alert("Grade Saved")
}
function messages(){
    alert("Message Sent")
}
function payments(){
    alert("Payment Successful")
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-info';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Example usage
showNotification('You have a new message!');
