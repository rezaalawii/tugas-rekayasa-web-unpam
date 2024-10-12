document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const feedbackMessage = document.getElementById('feedbackMessage');


    feedbackMessage.style.display = 'none';
    feedbackMessage.innerHTML = '';

    if (name === "" || email === "" || password === "" || confirmPassword === "") {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Semua field harus diisi.`;
    } else if (!validateEmail(email)) {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Format email tidak valid.`;
    } else if (password.length < 8) {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Password minimal 8 karakter.`;
    } else if (password !== confirmPassword) {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Password dan konfirmasi tidak cocok.`;
    } else {

        feedbackMessage.style.backgroundColor = 'rgba(144, 238, 144, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10004;</span> Terima kasih telah mendaftar!`;

        feedbackMessage.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }

    feedbackMessage.style.display = 'block';
});

function validateEmail(email) {

    const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
