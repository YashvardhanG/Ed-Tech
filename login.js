const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signIn = document.getElementById('signin_submit');
const signUp = document.getElementById('signup_submit');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email_reg').value
    password = document.getElementById('password_reg').value
    full_name = document.getElementById('name_reg').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password Invalid! (Input a valid E-Mail or Password must be >= 6 Characters)')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false) {
        alert('Fill in your Name!')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // Done
            alert('User Registered!')
            container.classList.remove("right-panel-active");
            auth.signOut();
            document.getElementById("title_change").innerHTML = "You've Registered!";
            document.getElementById("para_change").innerHTML = "Now you may use your registered details to login!";
            signUpButton.remove();
        })

        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email_sign').value
    password = document.getElementById('password_sign').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password Invalid! (Input a valid E-Mail or Password must be >= 6 Characters)')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            alert('User Logged In Successfully!')
            window.location = "dashboard.html"

        })

        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

document.getElementById("email_sign").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {document.getElementById("signin_submit").click();}
})

document.getElementById("password_sign").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {document.getElementById("signin_submit").click();}
})

document.getElementById("name_reg").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {document.getElementById("signup_submit").click();}
})

document.getElementById("email_reg").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {document.getElementById("signup_submit").click();}
})

document.getElementById("password_reg").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {document.getElementById("signup_submit").click();}
})
