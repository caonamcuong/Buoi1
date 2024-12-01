function updateQuantity(change) {
    const input = document.getElementById('quantity');
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    input.value = value;
    
    // Update checkout button
    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.textContent = `Mua hàng (${value})`;
}

// Timer for promotion
let seconds = 28;
let minutes = 8;

setInterval(() => {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    }
    // You can add UI update for timer here if needed
}, 1000);