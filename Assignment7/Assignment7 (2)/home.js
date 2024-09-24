document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html'; 
    } else {
        document.getElementById('user').textContent = username;
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html'; 
    });
});