

console.log("script loaded");
let title = document.querySelector("title");
let underline = document.querySelector("underline");
let nameField = document.querySelector("name-input-field");
let contactField = document.querySelector("contact-input-field");
let choiceField = document.querySelector("choice-input-field");
let countField = document.querySelector("count-input-field");
let submitBtn = document.querySelector("submitBtn");





 
const form = document.getElementById("form");

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phonenumber");
const emailAddress = document.getElementById("emailaddress");

// submitBtn.addEventListener("click",()=>{
//     }

console.log(firstName);
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(checkInputs(e)) {
        form.submit();
    }
});

function checkInputs(e) {
    // e.preventDefault();
    const firstNameVal = validateFirstName();
    if (firstNameVal === false) {
        
        return false;
    }

    const lastNameVal = validateLastName();
    if (lastNameVal === false) {
        
        return false;
    }

    const phoneNumberVal = validatePhone();
    if (phoneNumberVal === false) {
        
        return false;
    }


    const emailAddressVal = validateEmail();
    if (emailAddressVal === false) {
        
        return false;
    }
    form.reset();
    return true;


}

///////////////////////////////////////////
function validateFirstName() {
    const firstNameVal = firstName.value.trim();
    if(firstNameVal.length == 0) {
        setErrorFor(firstName, "First name cannot be blank.")
        firstName.focus();
        return false;
    }

    if(firstNameVal.length < 2) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be less than two characters.")
        //alert("wrong");
        
        firstName.focus();
        return false;
    }

    if(firstNameVal.length > 30) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be more than thirty characters.")
        //alert("wrong");
        
        firstName.focus();
        return false;
    }
    
    if(!firstNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(firstName, "First name must contain letters only.")
        firstName.focus();
        return false;
    }

return true;     
};


function validateLastName() {
    const lastNameVal = lastName.value.trim();
    if(lastNameVal.length == 0) {
        setErrorFor(lastName, "Last name cannot be blank.")
        lastName.focus();
        return false;
    }

    if(lastNameVal.length < 2) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be less than two characters.")
        //alert("wrong");
        
        lastName.focus();
        return false;
    }

    if(lastNameVal.length > 30) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be more than thirty characters.")
        //alert("wrong");
        
        lastName.focus();
        return false;
    }
    
    if(!lastNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(lastName, "Last name must contain letters only.")
        lastName.focus();
        return false;
    }

return true;     
};



function validatePhone() {
    const phoneNumberVal = phoneNumber.value.trim();

    if(phoneNumberVal.length === 0) {
        setErrorFor(phoneNumber, "Phone number cannot be blank.")
        phoneNumber.focus();
        return false;
    }

    if(phoneNumberVal.length > 10) {
        setErrorFor(phoneNumber, "Phone number cannot be more than 10 digits.")
        phoneNumber.focus();
        return false;
    }

    if(!phoneNumberVal.match(/^\d+$/)) {
        setErrorFor(phoneNumber, "Phone number must contain only numbers.")
        phoneNumber.focus();
        return false;
    }



    return true;
};




function validateEmail() {
  let emailAddressVal = emailAddress.value.trim();

  if (emailAddressVal === "") {
    setErrorFor(emailAddress, "Please provide an email.");
    emailAddress.focus();
    return false;
  }

  const atpos = emailAddressVal.indexOf("@");
  const dotpos = emailAddressVal.lastIndexOf(".");

  if (atpos < 1) {
    setErrorFor(emailAddress, 
      "@ symbol must not be at the beginning of the email."
    );
    emailAddress.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    setErrorFor(emailAddress, 
      "\nYou must include a domain name after the @ symbol."
    );
    emailAddress.focus();
    return false;
  }

  if (emailAddressVal.endsWith("@example.com")) {
    setErrorFor(emailAddress, 
      "Your email address cannot be example.com."
    );
    emailAddress.focus();
    return false;
  }

  return true;
}






// function checkInputs() {
//     // getting the values from the inputs
//     const firstNameVal = firstName.value.trim();
//     const lastNameVal = lastName.value.trim();
//     const phoneNumberVal = phoneNumber.value.trim();
//     const emailAddressVal = emailAddress.value.trim();



//     if(firstNameVal === "") {
//         // show error
//         // and error class
//         setErrorFor(firstName, "First name cannot be blank.")
//         // alert("wrong");
//         // errors.push("wrong")
//     }
//     else {
//         // add success class
//         setSuccessFor(firstName);
//     }


//     if(lastNameVal === "") {
//         setErrorFor(lastName, "Last name cannot be blank.")
//     }
//     else {
//         setSuccessFor(lastName);
//     }


    
//     if(phoneNumberVal === "") {
//         setErrorFor(phoneNumber, "Phone Number cannot be blank.")
//     }
//     else {
//         setSuccessFor(phoneNumber);
//     }

    
//     if(emailAddressVal === "") {
//         setErrorFor(emailAddress, "Email Address cannot be blank.")
//     }
//     else {
//         setSuccessFor(emailAddress);
//     }

// }


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message; // add error message inside small

    formControl.className = "form-control error";
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}








