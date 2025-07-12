

const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const btn= document.querySelector('.submit-button');



btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Check each field and apply border if empty
    if (!firstname.value) {
        firstname.style.border = '1px solid red';
        firstname.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            firstname.style.border = '';
            firstname.style.animation = '';
        }, 500);
    }
    
    if (!lastname.value) {
        lastname.style.border = '1px solid red';
        lastname.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            lastname.style.border = '';
            lastname.style.animation = '';
        }, 500);
    }
    
    if (!email.value) {
        email.style.border = '1px solid red';
        email.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            email.style.border = '';
            email.style.animation = '';
        }, 500);
    }
    
    if (!subject.value) {
        subject.style.border = '1px solid red';
        subject.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            subject.style.border = '';
            subject.style.animation = '';
        }, 500);
    }
    
    if (!message.value) {
        message.style.border = '1px solid red';
        message.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            message.style.border = '';
            message.style.animation = '';
        }, 500);
    }

    if (firstname.value && lastname.value && email.value && subject.value && message.value) {
     
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        successMessage.style.display = 'flex';
        
        // Add event listener for continue button
        document.querySelector('.continue-button').addEventListener('click', () => {
            // Reset form and show it again
            firstname.value = '';
            lastname.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            
            // Show form elements again
            document.querySelector('.container').style.display = 'block';
            document.querySelector('.heading').style.display = 'block';
            successMessage.style.display = 'none';
        });
    }
    
  
});
