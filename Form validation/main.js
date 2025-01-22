document.addEventListener('DOMContentLoaded', () => {
    
    // Form Validation Logic
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dropdown = document.getElementById('dropdown');
    const feedbacks = {
      name: document.getElementById('nameFeedback'),
      email: document.getElementById('emailFeedback'),
      password: document.getElementById('passwordFeedback'),
      dropdown: document.getElementById('dropdownFeedback'),
    };
  
    form.addEventListener('submit', (event) => {
      let isValid = true;
  
      // Name Validation
      if (nameInput.value.length < 3) {
        feedbacks.name.textContent = 'Name must be at least 3 characters long.';
        isValid = false;
      } else {
        feedbacks.name.textContent = '';
      }
  
      // Email Validation
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(emailInput.value)) {
        feedbacks.email.textContent = 'Invalid email format.';
        isValid = false;
      } else {
        feedbacks.email.textContent = '';
      }
  
      // Password Validation
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!passwordPattern.test(passwordInput.value)) {
        feedbacks.password.textContent =
          'Password must be 8 characters, 1 uppercase, and 1 number.';
        isValid = false;
      } else {
        feedbacks.password.textContent = '';
      }
  
      if (!isValid) event.preventDefault();
    });
  
    // Dropdown Feedback
    dropdown.addEventListener('change', () => {
      feedbacks.dropdown.textContent = dropdown.value
        ? `You selected: ${dropdown.value}`
        : '';
    });
  });
  