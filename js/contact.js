// Validation and redirection after form submission
function notif() {
    const name = document.querySelector('.input.satu').value;
    const email = document.querySelector('.input.dua').value;
    const message = document.querySelector('.input.tiga').value;

    if (!name || !email || !message) {
        alert('Anda harus mengisi semua format!');
        return false;
    }

    // If form is filled, send the email and redirect to index.html
    alert('Pesan Anda telah terkirim!');
    
    // Simulating sending an email
    window.location.href = "mailto:kagenoucid838@gmail.com?subject=Contact Form&body=" + 
        "Nama: " + name + "%0D%0AEmail: " + email + "%0D%0APesan: " + message;
    
    // Redirect to index.html
    window.location.href = "../index.html";
}
