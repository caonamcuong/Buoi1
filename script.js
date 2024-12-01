// Color selection
const colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        colors.forEach(c => c.classList.remove('selected'));
        color.classList.add('selected');
    });
});

// Size selection
const sizes = document.querySelectorAll('.size');
sizes.forEach(size => {
    size.addEventListener('click', () => {
        sizes.forEach(s => s.classList.remove('selected'));
        size.classList.add('selected');
    });
});

// Quantity controls
const quantityInput = document.querySelector('.quantity input');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');

decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// Prevent invalid input
quantityInput.addEventListener('change', () => {
    if (quantityInput.value < 1) {
        quantityInput.value = 1;
    }
});

// Thumbnail click handling
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;

        // Optional: Update active thumbnail styling
        thumbnails.forEach(t => t.style.border = '1px solid #ddd');
        thumbnail.style.border = '2px solid #000';
    });
});