
let title = document.querySelector("title");
let submitBtn = document.querySelector("submit");
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phonenumber");
const emailAddress = document.getElementById("emailaddress");
//const radioGroup = document.getElementsByClassName("radio-group")
const radioInputs = document.querySelectorAll(".radio-input");
const yesRadio = document.getElementById('yesRadio');
const noRadio = document.getElementById('noRadio');




// submitBtn.addEventListener("click",()=>{
//     }



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(checkInputs(e)) {
        setTimeout(() => {
            form.submit();
        }, 2000); // to delay the submission by 2 seconds
    }
});

function checkInputs(e) {
    
    const firstNameVal = validateFirstName();
    if (firstNameVal === false) {
        //e.returnValue = false;
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

    const radioGroupVal = validateRadioGroup();
    if (radioGroupVal === false) {
        return false;
    }

    const dropDownVal = validateDropDown();
    if (dropDownVal === false) {
        return false;
    }

    
    //this.submit();
    form.reset();
    return true;


}

///////////////////////////////////////////
function validateFirstName() {
    const firstNameVal = firstName.value.trim();
    
    
    //clearErrorFor(firstName);  
    if(firstNameVal.length == 0) {
        setErrorFor(firstName, "First name cannot be blank.")
        firstName.focus();
        return false;
    }

    if(firstNameVal.length < 2) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be less than two characters.")
        firstName.focus();
        return false;
    }
    

    else if(firstNameVal.length > 30) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be more than thirty characters.")
        firstName.focus();
        return false;
    }
    
    
    else if(!firstNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(firstName, "First name must contain letters only.")
        firstName.focus();
        return false;
    }

    else {
        setSuccessFor(firstName)
    }
//clearErrorFor(firstName);    
return firstNameVal; 


};


function validateLastName() {
    const lastNameVal = lastName.value.trim();
    
    if(lastNameVal.length == 0) {
        setErrorFor(lastName, "Last name cannot be blank.")
        lastName.focus();
        return false;
    }

    else if(lastNameVal.length < 2) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be less than two characters.")
        
        
        lastName.focus();
        return false;
    }

    else if(lastNameVal.length > 30) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be more than thirty characters.")
        
        
        lastName.focus();
        return false;
    }
    
    else if(!lastNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(lastName, "Last name must contain letters only.")
        lastName.focus();
        return false;
    }
    else {
        setSuccessFor(lastName)
    }

return lastNameVal;     
};



function validatePhone() {
    const phoneNumberVal = phoneNumber.value.trim();

    if(phoneNumberVal.length === 0) {
        setErrorFor(phoneNumber, "Phone number cannot be blank.")
        phoneNumber.focus();
        return false;
    }

    else if(phoneNumberVal.length != 10) {
        setErrorFor(phoneNumber, "Phone number cannot be more or less than 10 digits.")
        phoneNumber.focus();
        return false;
    }

    else if(!phoneNumberVal.match(/^\d+$/)) {
        setErrorFor(phoneNumber, "Phone number must contain only numbers.")
        phoneNumber.focus();
        return false;
    }
    else {
        setSuccessFor(phoneNumber)
    }


    return phoneNumberVal;
};




function validateEmail() {
  let emailAddressVal = emailAddress.value.trim().toLowerCase();
  const atpos = emailAddressVal.indexOf("@");
  const dotpos = emailAddressVal.lastIndexOf(".");

  if (emailAddressVal === "") {
    setErrorFor(emailAddress, "Please provide an email.");
    emailAddress.focus();
    return false;
  }

  

  else if (atpos < 1) {
    
    setErrorFor(emailAddress, 
      "@ symbol must not be at the beginning of the email."
    );
    emailAddress.focus();
    return false;
  }

  else if (dotpos - atpos < 2) {
    setErrorFor(emailAddress, 
      "\nYou must include a domain name after the @ symbol."
    );
    emailAddress.focus();
    return false;
  }

  else if (emailAddressVal.endsWith("@example.com")) {
    setErrorFor(emailAddress, 
      "Your email address cannot be example.com."
    );
    emailAddress.focus();
    return false;
  }

  else {
    setSuccessFor(emailAddress)
}


  return emailAddressVal;
}




const radioGroup = document.querySelector(".radio-group");

function validateRadioGroup() {
    const radioGroups = document.querySelectorAll('input[name="options"]');
    let selectedValue;
    let isSelected = false;

    radioGroups.forEach((radioGroup) => {
        if (radioGroup.checked) {
            isSelected = true;
            selectedValue = radioGroup.value;
        }
    })
    if(!isSelected) {
        setErrorFor(radioGroup, "Are you attending the party or not?");
        radioGroups[0].focus();
        return false;

    } else {
        clearErrorFor(radioGroups[0]);

        if (selectedValue == "yes") {
            window.alert ("Thank you for confirming that you are coming!");

            }else {
                window.alert ("Thank you for confirming that you are not coming.")
            }
            return true;
        }
    }





 
    



// creating the dropdown menu to pick options from
const dropDown = document.getElementById("dynamic-dropdown");
const options = ["One person", "Two people", "Three people", "Four people", "Five people"];

// using DocumentFragment for efficient option creation
const fragment = document.createDocumentFragment();

// using for loop to populate the dropdown with options
options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    fragment.appendChild(opt); // this appends each option to the fragment created 
});

// now appending all the options to the dropdown 
dropDown.appendChild(fragment);

// adding an event handler when an user changes the dropdown menu
dropDown.addEventListener("change", function() {
    window.alert("You have selected: " + this.value);
    const selectedValue = this.value;

    // this changes the title attribute of the dropdown 
    this.setAttribute("title", `Selected: ${selectedValue}`);

    // looping through the options to modify the selected one
    for(let i = 0; i < dropDown.options.length; i++) {
        const option = dropDown.options[i];  
        if (option.value === selectedValue) {
            option.style.backgroundColor = "red"; // to highlight the selection
            
        }
        else {
            option.style.backgroundColor = ""; // to reset others that is not selected
        }
    
    }

});



// writing function to update the selection and change the parent color
function updateChoice() {
    let selectedValue = "";
    radioInputs.forEach(input => {
        if (input.checked) {
            selectedValue = input.value;
        
        }
    });

console.log("Selected Option:", selectedValue);

// here the parent node is radioGroup and the children nodes are label elements such as radio buttons and text
if (selectedValue === "yes") {
    radioGroup.style.color = "green";
    //yesRadio.style.backgroundColor = 'green'; // not working as intended
    //noRadio.style.backgroundColor = ''; // not working as intended
} 
else if (selectedValue === "no") {
    radioGroup.style.color = "red";
    //noRadio.style.backgroundColor = 'red'; // not working as intended
    //yesRadio.style.backgroundColor = ''; // not working as intended
    

} 
else {
    radioGroup.style.color = "";
    
   
}
}

// adding event listener to radio
radioInputs.forEach(input => {
    input.addEventListener("change", updateChoice);
});




// to pront out the error message
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message; // add error message inside small

    formControl.className = "form-control error";
}


// to print out the error message
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    
}



function clearErrorFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
     formControl.className = "form-control success";
    small.innerText = "";
    //small.innerText = "none";
}




