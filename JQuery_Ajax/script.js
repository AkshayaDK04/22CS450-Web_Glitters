function displayImage() {
    var input = document.getElementById('imageInput');
    var imageElement = document.getElementById('selectedImage');
    var errorText = document.getElementById('errorText');

    if (input.files && input.files[0]) {
      var extension = input.files[0].name.split('.').pop().toLowerCase();

      if (extension === 'jpg' || extension === 'jpeg') {
        errorText.textContent = ''; // Clear previous error message

        var reader = new FileReader();

        reader.onload = function (e) {
          imageElement.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
        
          $("#imagebutton").hide();
        
      } else {
        // Display error message
        errorText.textContent = 'Please select a JPG or JPEG file.';
        // Reset input value to clear the invalid file
        input.value = '';
        // Clear the displayed image
        imageElement.src = '';
      }
    }
  }

// Function for email validation
function validateEmail() {
    var emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    return emailRegex.test(this.email);
  }

  // Function for password validation
  function validatePassword() {
    var passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).{8,10}$');
    return passwordRegex.test(this.password);
  }

  // Function for phone number validation
  function validatePhoneNumber() {
    return this.phone.length === 10;
  }

  // Function for radio button validation
  function validateGender() {
    return this.gender === 'Male' || this.gender === 'Female';
  }

  // Constructor function for RegistrationForm using prototype
  function RegistrationForm(user) {
    this.user = user;
  }

  // Adding a prototype method for overall validation
  RegistrationForm.prototype.validate = function() {
    if (!this.user.name) {
      alert("Enter name");
      return false;
    }

    if (!validateEmail.bind(this.user)()) {
      alert("Enter a valid email address");
      return false;
    }

    if (!validatePassword.bind(this.user)()) {
      alert("Password must contain one uppercase, lowercase, and symbol, and be between 8 to 10 characters");
      return false;
    }

    if (!validatePhoneNumber.bind(this.user)()) {
      alert("Enter a valid phone number");
      return false;
    }

    if (!validateGender.bind(this.user)()) {
      alert("Please select a gender");
      return false;
    }

    // Add additional validation logic here if needed

    return true;
  };

  // Your existing check function can be modified to use prototypes
  var check = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var phone = document.getElementById("phn").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    var user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      gender: gender ? gender.value : ''
    };

    var registrationForm = new RegistrationForm(user);

    return registrationForm.validate();
  };

  
  
