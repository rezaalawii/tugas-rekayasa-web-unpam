
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const topic = document.getElementById('topic').value.trim();
    const details = document.getElementById('details').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage');


    feedbackMessage.style.display = 'none';
    feedbackMessage.innerHTML = '';

    if (topic === "" || details === "") {

        feedbackMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10060;</span> Semua field harus diisi.`;
    } else {

        feedbackMessage.style.backgroundColor = 'rgba(144, 238, 144, 0.8)';
        feedbackMessage.innerHTML = `<span>&#10004;</span> Terima kasih atas feedback Anda!`;


        feedbackMessage.style.display = 'block';


        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }

    feedbackMessage.style.display = 'block';
});

