
window.onload = function () {
  // Select the form element
  var form = document.querySelector("form");

  // Add an event listener for the submit event
  form.addEventListener("submit", function (event) {
    // validation code goes here

    event.preventDefault();

    // Select the select element and get its value
    var select = document.querySelector("select");
    academicYear = select.value;

    // Select all the input elements
    var inputs = document.querySelectorAll("input");

    // Declare variables for storing input values
    var teamName,
    arabicName,
      englishName,
      email,
      phone,
      nationalId,
      university,
      faculty,
      academicYear;

    // Loop through the input elements and get their values
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.type == "text") {
        // Get the value of text input
        var value = input.value.trim();
        // Assign the value to a variable based on the input name
        switch (input.name) {
          case "teamName":
            teamName = value;
            break;
          case "arabicName":
            arabicName = value;
            break;
          case "englishName":
            englishName = value;
            break;
          case "email":
            email = value;
            break;
          case "phone":
            phone = value;
            break;
          case "nationalId":
            nationalId = value;
            break;
          case "university":
            university = value;
            break;
          case "faculty":
            faculty = value;
            break;
        }


      }
    }

    // Declare a variable for storing validation status
    var isValid = true;

    if (teamName == "") {
      isValid = false;
      alert("team name cannot be blank");
    } else if (!/^[أ-ي\s]+$/.test(teamName)) {
      isValid = false;
      alert("Team name must contain only Arabic letters and spaces");
    }

    // Validate arabic name
    if (arabicName == "") {
      // Arabic name cannot be blank
      isValid = false;
      alert("Arabic name cannot be blank");
    } else if (!/^[أ-ي\s]+$/.test(arabicName)) {
      // Arabic name must contain only Arabic letters and spaces
      isValid = false;
      alert("Arabic name must contain only Arabic letters and spaces");
    }

    // Validate english name
    if (englishName == "") {
      // English name cannot be blank
      isValid = false;
      alert("English name cannot be blank");
    } else if (!/^[A-Za-z\s]+$/.test(englishName)) {
      // English name must contain only English letters and spaces
      isValid = false;
      alert("English name must contain only English letters and spaces");
    }

    // Validate email
    if (email == "") {
      // Email cannot be blank
      isValid = false;
      alert("Email cannot be blank");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      // Email must be in a valid format
      isValid = false;
      alert("Email must be in a valid format");
    }

    // Validate phone number
    if (phone == "") {
      // Phone number cannot be blank
      isValid = false;
      alert("Phone number cannot be blank");
    } else if (!/^\d{11}$/.test(phone)) {
      // Phone number must be exactly 10 digits
      isValid = false;
      alert("Phone number must be exactly 11 digits");
    }

    // Validate national ID
    if (nationalId == "") {
      // National ID cannot be blank
      isValid = false;
      alert("National ID cannot be blank");
    } else if (!/^(2|3)\d{13}$/.test(nationalId)) {
      // National ID must be exactly 14 digits
      isValid = false;
      alert("National ID isn't correct");
    }

    // Validate university
    if (university == "") {
      // University cannot be blank
      isValid = false;
      alert("University cannot be blank");
    }

    // Validate academic year
    if (academicYear == "") {
      // Academic year cannot be blank
      isValid = false;
      alert("Academic year cannot be blank");
    }

    // Validate university
    if (faculty == "") {
      // University cannot be blank
      isValid = false;
      alert("University cannot be blank");
    }



    if (isValid) {
      // console.log(gender);
      console.log("All Done");
      alert("All Done");
    }
  });
};
