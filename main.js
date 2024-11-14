
document.querySelectorAll('.menu-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
