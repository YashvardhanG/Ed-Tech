var firebaseConfig = {
    apiKey: "AIzaSyArhE-X9Fpu6q8emA1eUukLUvWsaea1_A0",
    authDomain: "ed-tech-f6bd8.firebaseapp.com",
    projectId: "ed-tech-f6bd8",
    storageBucket: "ed-tech-f6bd8.appspot.com",
    messagingSenderId: "717645366420",
    appId: "1:717645366420:web:46e48353e206febafc2081"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
const logout = document.getElementById('logout');
var username = "Fetching Data (Might Take a While)";
var email = "Fetching Data (Might Take a While)";

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User is logged in: ', user);
        getUserData(user.uid);
    }
    else {
        console.log('User is Logged Out');
    }
});

function getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
        username = snap.val().full_name;
        email = snap.val().email;
        document.getElementById("username").innerHTML = username;
        document.getElementById("email").innerHTML = email;
    })
}

window.addEventListener('load', (event) => {
    document.getElementById("username").innerHTML = username;
    document.getElementById("email").innerHTML = email;
});

logout.addEventListener('click', () => {
    auth.signOut();
    console.log('User signed out!');
    alert('Successfully signed out!');
    location.replace("index.html")
});

const upgrade = document.getElementById('upgrade');
logout.addEventListener('click', () => {
    alert('Will take you to upgrade page');
});