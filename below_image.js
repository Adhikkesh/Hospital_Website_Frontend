function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone").value;
    var isvalid = true;
    



    if (name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
      } else if (name.length < 2 || name.length > 50) {
        document.getElementById("nameError").innerHTML = "Name must be between 2 and 50 characters long";
        isValid = false;
      } else {
        document.getElementById("nameError").innerHTML = "";
      }

      if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
      } else {
        document.getElementById("emailError").innerHTML = "";
      }

      return isvalid;


}