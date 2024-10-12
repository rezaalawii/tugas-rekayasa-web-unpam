
document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(checkbox => checkbox.value);
    const jumlahDrakor = document.querySelector('input[name="jumlahDrakor"]:checked');

    const feedbackMessage = document.getElementById('feedbackMessage');

    if (genres.length === 0 || !jumlahDrakor) {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Semua field harus diisi.`;
    } else {

        feedbackMessage.style.backgroundColor = 'rgba(144, 238, 144, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10004;</span> Terima kasih telah mengisi survei!`;
        feedbackMessage.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }

    feedbackMessage.style.display = 'block';
});
