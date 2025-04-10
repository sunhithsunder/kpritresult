function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === '1234') {
        window.location.href = "result.html";
    } else {
        alert('Invalid Username or Password');
    }
}
