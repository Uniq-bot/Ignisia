
const emaill = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = emaill.value;
    const passwordValue = password.value;
    
    // For now, just redirect to index.html
    // In a real application, you would validate credentials here
    window.location.href = 'index.html';
}); 
