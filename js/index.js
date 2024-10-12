
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.style.backgroundColor = '#FFC0CB';
    } else {
        navbar.classList.add('bg-transparent');
        navbar.style.backgroundColor = 'transparent';
    }
});

document.getElementById('searchBtn').addEventListener('click', function () {
    const searchInput = document.querySelector('input[type="search"]');
    alert('Searching for: ' + searchInput.value);
});

document.getElementById('searchBtn').addEventListener('click', function () {
    const searchInput = document.querySelector('input[type="search"]');
    const query = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('#gallery .card');

    if (query) {
        cards.forEach(function (card) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(query)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    } else {
        cards.forEach(function (card) {
            card.parentElement.style.display = '';
        });
    }
});
