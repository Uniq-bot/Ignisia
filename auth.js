// Authentication state management
let isAuthenticated = false;
let userName = '';

// Function to check if user is authenticated
function checkAuth() {
    // In a real application, this would check a token or session
    // For now, we'll use localStorage to simulate authentication
    isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    userName = localStorage.getItem('userName') || '';
    updateNav();
}

// Function to update the navigation based on auth state
function updateNav() {
    const nav = document.getElementById('nav');
    const signInBtn = nav.querySelector('li:last-child');
    
    if (isAuthenticated) {
        // Remove sign in button
        signInBtn.remove();
        
        // Add user name
        const userNameLi = document.createElement('li');
        userNameLi.className = 'user-name';
        userNameLi.innerHTML = `
            <span class="user-greeting">Welcome,</span>
            <span class="user-name-text">${userName}</span>
            <i class="fas fa-user-circle"></i>
        `;
        nav.appendChild(userNameLi);
    } else {
        // Add sign in button if not authenticated
        if (!nav.querySelector('li:last-child button')) {
            const li = document.createElement('li');
            li.innerHTML = '<a href="login.html"><button>Sign In</button></a>';
            nav.appendChild(li);
        }
    }
}

// Initialize auth check
checkAuth();

// Add event listener for sign out
window.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.user-name')) {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userName');
        isAuthenticated = false;
        userName = '';
        updateNav();
        window.location.href = 'login.html';
    }
});
