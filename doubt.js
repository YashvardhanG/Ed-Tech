const items = document.querySelectorAll(".accordion a");
function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

var status = localStorage.getItem("status_var");
console.log(status);

document.getElementById("question").addEventListener("keyup", function(e) 
{
    if (e.keyCode === 13) {
        document.getElementById("submit").click();
    }
})

const pressedButton = document.getElementById("submit");
pressedButton.addEventListener("click", function (event) {
  const question = document.getElementById("question").value;
  if (question.length > 10)
  {
    if (status == 1)
    {
      alert("Your doubt has been recorded!");
      document.getElementById("doubt").innerHTML += "<b>Your submitted doubt is:</b> " + question;
    }

    else
    {
      alert("You need to login first!");
      location.replace("login.html")
    }
  }

  else
  {
    alert("The doubt must be at least 10 characters!")
  }
})