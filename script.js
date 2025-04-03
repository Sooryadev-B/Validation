
function myValidation() {
    var fullName = document.getElementById("name").value;
    var emailId = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var userPass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirm").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passError = document.getElementById("passError");
    var confirmError = document.getElementById("confirmError");

    var okay = true;

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";

    if (fullName.length < 5) {
        nameError.textContent = "Name too short!";
        okay = false;
    }

    if (!emailId.includes("@")) {
        emailError.textContent = "Bad email!";
        okay = false;
    }

    if (phoneNumber == "123456789" || phoneNumber.length != 10 || isNaN(phoneNumber)) {
        phoneError.textContent = "Bad phone!";
        okay = false;
    }

    if (userPass == "password" || userPass == fullName.toLowerCase() || userPass.length < 8) {
        passError.textContent = "Bad password!";
        okay = false;
    }

    if (userPass != confirmPass) {
        confirmError.textContent = "Passwords no match!";
        okay = false;
    }

    return okay;
}


//for the switching

document.getElementById("switch-link").addEventListener("click", function(event) {
    event.preventDefault();
  
    const formTitle = document.getElementById("form-title");
    const switchText = document.getElementById("switch-text");
  
    if (formTitle.textContent === "Sign Up") {
      formTitle.textContent = "Log In";
      document.getElementById("name").parentElement.style.display = "none";
      document.getElementById("confirm").parentElement.style.display = "none";
      switchText.innerHTML = "Don't have an account? <a href='#' id='switch-link'>Sign up</a>";
    } else {
      formTitle.textContent = "Sign Up";
      document.getElementById("name").parentElement.style.display = "block";
      document.getElementById("confirm").parentElement.style.display = "block";
      switchText.innerHTML = "Already have an account? <a href='#' id='switch-link'>Log in</a>";
    }
    document.getElementById("switch-link").addEventListener("click", arguments.callee);
  });