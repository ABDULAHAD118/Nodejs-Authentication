const wrapper = document.querySelector('.wrapper');
const signup = document.querySelector('.signup-link');
signup.addEventListener('click', () => {
    wrapper.classList.remove('animated-signup');
    wrapper.classList.add('animated-signin');

});
const signin = document.querySelector('.signin-link');
signin.addEventListener('click', () => {
    wrapper.classList.remove('animated-signin');
    wrapper.classList.add('animated-signup');

});

