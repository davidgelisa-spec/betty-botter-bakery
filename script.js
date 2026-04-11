// Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (!name || !email || !item || !quantity) {
        alert('Please fill in all required fields.');
        e.preventDefault();
    }
});