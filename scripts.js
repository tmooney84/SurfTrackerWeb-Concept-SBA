document.addEventListener('DOMContentLoaded', (event) => {
  const newsletterForm = document.querySelector('#newsletter-form');
  const emailInput = document.querySelector('#email');
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Thanks for subscribing!';

  /* By calling e.preventDefault(), the form submission is intercepted, 
  allowing you to handle the submission in JavaScript without refreshing 
  the page. */
  newsletterForm.addEventListener('submit', (event2) => {
    event2.preventDefault();

    if (emailInput.value === '') {
      alert('Please enter your email address');
    } else {
      newsletterForm.appendChild(successMessage);
      emailInput.value = '';
    }
  });
});
