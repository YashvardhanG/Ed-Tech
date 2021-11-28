const items = document.querySelectorAll(".accordion a");
function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

var status = localStorage.getItem("status_var");
console.log(status);

const pressedButton = document.getElementById("submit");
pressedButton.addEventListener("click", function (event) {
  if (status == 1)
  {
    alert("Your doubt has been recorded!");
  }
  
  else
  {
    alert("You need to login first!");
    location.replace("login.html")
  }
})