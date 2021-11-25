const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signIn = document.getElementById('signin_submit');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signIn.addEventListener('click', () => {
	window.location="dashboard.html"
});

