 const signUpButton = document.getElementById('signUp');
 const signInButton = document.getElementById('signIn');
 const signInForm = document.getElementById('signInForm');
 const signUpForm = document.getElementById('signUpForm');

 signUpButton.addEventListener('click', () => {
     signUpForm.style.display = 'block';
     signInForm.style.display = 'none';
 });

 signInButton.addEventListener('click', () => {
     signInForm.style.display = 'block';
     signUpForm.style.display = 'none';
 });