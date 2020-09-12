// Defining a function to display error message
function printErr(elemID, msg) {
    let elem = document.getElementById(elemID);
    if (elem) {
        elem.innerHTML = msg;
    }
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;
    let gender = document.contactForm.gender.value;
    let hobbies = [];
    let checkboxes = document.getElementsByName("hobbies[]");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }

    // Defining error variables with a default value
    let errName = errEmail = errMobile = errCountry = errGender = errHobbies = true;

    // Validate Name
    if (name == "") {
        printErr("errName", "Please enter your name");
    } else {
        var regExp = /^[a-zA-Z\s]+$/;
        if (regExp.test(name) === false) {
            printErr("errName", "Please enter a valid name");
        } else {
            printErr("errName", "");
            errName = false;
        }
    }

    // Validate email address
    if (email == "") {
        printErr("errEmail", "Please enter your email");
    } else {
        let regExp = /^\S+@\S+\.\S+$/;
        if (regExp.test(email) === false) {
            printErr("errEmail", "Please enter a valid Email");
        } else {
            printErr("errEmail", "");
            errEmail = false;
        }
    }

    // Validate mobile
    if (mobile == "") {
        printErr("errMobile", "Please enter your mobile");
    } else {
        let regExp = /^(0|[1-9]\d*)$/;
        if (regExp.test(mobile) === false) {
            console.log(mobile);
            printErr("errMobile", "Please enter valid mobile number");
        } else {
            printErr("errMobile", "");
            errMobile = false;
        }
    }

    // Country Validate
    if (country == "Select") {
        printErr("errCountry", "Please Choose your country");
    } else {
        printErr("errCountry", "");
        errCountry = false;
    }

    // Validate Gender
    if (gender == "") {
        printErr("errGender", "Please Choose your gender");
    } else {
        printErr("errGender", "");
        errGender = false;
    }

    // Validate Hobbies
    if (hobbies.length == 0) {
        printErr("errHobbies", "Please Choose at least 1 Hobby");
    } else {
        printErr("errHobbies", "");
        errHobbies = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((errName || errEmail || errMobile || errCountry || errGender || errHobbies) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        let dataPreview = "You've entered the following details: \n" + "Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n" + "Hobbies: " + hobbies.join(", ") + "\n";

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }

    // End
}
