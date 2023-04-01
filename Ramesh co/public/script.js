function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Add AJAX call to authenticate user and retrieve data
  if (username == "johndoe" && password == "password123") {
    window.location.href = "dashboard.html"; // Redirect to dashboard page
  } else {
    alert("Invalid username or password.");
  }
}
