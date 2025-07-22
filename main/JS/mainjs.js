//form validation javascript
function subscribed() {
  var element = document.getElementById("email");
  if (element.checkValidity()) {
    //if valid email entered
    alert("Successfully subscribed.");
    document.getElementById("subscribe").reset();
    return false;
  }
}
