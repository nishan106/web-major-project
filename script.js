document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
  
    let isValid = true;
  
    // Name Validation
    if (fullName.length < 5) {
      document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
      isValid = false;
    }
  
    // Email Validation
    if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
      document.getElementById("emailError").textContent = "Enter a valid email (must include @).";
      isValid = false;
    }
  
    // Phone Number Validation
    if (!/^\d{10}$/.test(phone) || phone === "1234567890" || phone === "123456789") {
      document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number (not 123456789).";
      isValid = false;
    }
  
    // Password Validation
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters and not 'password' or your name.";
      isValid = false;
    }
  
    // Confirm Password Validation
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Form submitted successfully!");
      // Optionally reset form or submit to server
      // document.getElementById("registrationForm").reset();
    }
  });
  