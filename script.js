document.addEventListener('DOMContentLoaded', () => {
    const signUpContainer = document.getElementById('signup');
    const signInContainer = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');

    // Show the sign-in form and hide the sign-up form
    function showSignIn() {
        signInContainer.style.display = 'block';
        signUpContainer.style.display = 'none';
    }

    // Show the sign-up form and hide the sign-in form
    function showSignUp() {
        signUpContainer.style.display = 'block';
        signInContainer.style.display = 'none';
    }

    // Add event listeners to buttons
    signUpButton.addEventListener('click', showSignUp);
    signInButton.addEventListener('click', showSignIn);

    // Optionally, you can set the default view to sign-in or sign-up
    showSignIn(); // or showSignUp();
});
