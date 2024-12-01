// Hàm để thay đổi hình ảnh chính khi nhấp vào hình thu nhỏ
function changeImage(thumbnail) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
}

// Hàm để cập nhật số lượng
function updateQuantity(change) {
    var quantityElement = document.getElementById('quantity');
    var quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;
}

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart() {
    var quantity = document.getElementById('quantity').textContent;
    var color = document.querySelector('input[name="color"]:checked').id.replace('color-', '');
    var size = document.querySelector('input[name="size"]:checked').id.replace('size-', '');
    
    alert('Đã thêm ' + quantity + ' sản phẩm vào giỏ hàng\nMàu sắc: ' + color + '\nKích thước: ' + size.toUpperCase());
}

// Hàm để tiến hành thanh toán
function buyNow() {
    var quantity = document.getElementById('quantity').textContent;
    var color = document.querySelector('input[name="color"]:checked').id.replace('color-', '');
    var size = document.querySelector('input[name="size"]:checked').id.replace('size-', '');
    
    alert('Đang chuyển đến trang thanh toán\nSố lượng: ' + quantity + '\nMàu sắc: ' + color + '\nKích thước: ' + size.toUpperCase());
}

// Thêm event listeners cho việc chọn màu sắc và kích thước
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[name="color"], input[name="size"]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function() {
            var type = this.name;
            var value = this.id.replace(type + '-', '');
            console.log('Đã chọn ' + type + ': ' + value);
        });
    }
});

