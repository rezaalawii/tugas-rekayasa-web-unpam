document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const startDate = document.getElementById('startDate').value.trim();
    const subscriptionDuration = document.getElementById('subscriptionDuration').value.trim();
    const terms = document.getElementById('terms').checked;
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    subscriptionMessage.style.display = 'none';
    subscriptionMessage.innerHTML = '';

    if (name === "" || startDate === "" || subscriptionDuration === "") {
        subscriptionMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)'; 
        subscriptionMessage.innerHTML = `<span>&#10060;</span> Semua field harus diisi.`;
    } else if (!terms) {
        subscriptionMessage.style.backgroundColor = 'rgba(255, 99, 71, 0.8)'; 
        subscriptionMessage.innerHTML = `<span>&#10060;</span> Anda harus setuju dengan syarat dan ketentuan.`;
    } else {
        subscriptionMessage.style.backgroundColor = 'rgba(144, 238, 144, 0.8)'; 
        subscriptionMessage.innerHTML = `<span>&#10004;</span> Langganan berhasil dipesan!`;
        
        subscriptionMessage.style.display = 'block';
    
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000); 
    }

    subscriptionMessage.style.display = 'block'; 
});