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

var status = 0;
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User is logged in: ', user);
        status = 1;
        localStorage.setItem("status_var", status);
    } else {
        console.log('User is Logged Out');
        status = 0;
        localStorage.setItem("status_var", status);
    }
});

const login_chk = document.getElementById("login_chk");
login_chk.addEventListener('click', () => {
  if (status == 1) {
    location.replace("dashboard.html");
  }
  else {
    location.replace("login.html");
  }
});