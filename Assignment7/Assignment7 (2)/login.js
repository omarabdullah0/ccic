document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value; // للحصول علي اسم المستخدم
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'home.html';
    } else {
        alert('Please Enter Username and Password ');
    }
});