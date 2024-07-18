var tablinks = document.getElementsByClassName("tab");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("skill");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("skill");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
     sidemenu.style.right = "0"; 
    }
function closemenu() {
        sidemenu.style.right = "-200px"; 
   }



  const scriptURL = 'https://script.google.com/macros/s/AKfycby_JTPZObbXRqEDzohxkCkea-drglDiNcSKwzz2y9SAPl455DczYYvCggupsB7yRcg-/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for Contacting us..! We Will Get Back To You Soon..."
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
