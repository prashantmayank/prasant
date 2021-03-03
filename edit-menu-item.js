function validate() {
  var nam = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var e = document.getElementById("category");
  var strUser = e.options[e.selectedIndex].value;
  //   alert(strUser);
  var pattern = /^\d+$/;

  if (nam.length < 2 && nam.length > 65) {
    alert("Title should have 2 to 65 characters");
  } else if (!pattern.test(price)) {
    alert("Price has to be a number");
  } else if (strUser == "Choose") {
    alert("Please select a category");
  }
}
