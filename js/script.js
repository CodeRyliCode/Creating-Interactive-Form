//Default focus on name field when page first loads
const name = document.getElementById("name");
window.onload = function () {
  name.focus();
};

//Hiding other job role text field by default
const other = document.getElementById("other-job-role");
other.style.display = "none";

/*Function that uses conditional to check if user chooses 'other job role'. If so,
the default hidden display for 'other job role' text field will be blocked and appear to the user. */
function displayotherjobRole() {
  const jobOption = document.getElementById("title").value;
  if (jobOption == "other") {
    other.style.display = "block";
  } else {
    other.style.display = "none";
  }
}

// Disabling the T-shirt Color options by default
const disableColor = document
  .getElementById("color")
  .setAttribute("disabled", "disabled");

/*using a change event listener to target and loop through options and set conditionals
in order to show matching selected theme colors and hide other colors in the drop down menu*/
const color = document.getElementById("color");
const design = document.getElementById("design");
const option = color.children;

design.addEventListener("change", (event) => {
  color.disabled = false;
  for (let i = 0; i < option.length; i++) {
    const eventTarget = event.target.value;
    console.log(eventTarget);
    const dataTheme = option[i].getAttribute("data-theme");
    if (eventTarget === dataTheme) {
      option[i].hidden = false;
      option[i].selected = true;
    } else {
      option[i].hidden = true;
      option[i].selected = false;
    }
  }
});

/*using a change event listener and conditionals to add and subtract costs
of activities that are checked/unchecked and displaying total cost in real time*/
const activities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
let totalCost = 0;

activities.addEventListener("change", (event) => {
  dataCost = event.target.getAttribute("data-cost");
  dataCost = +dataCost;
  if (event.target.checked == true) {
    totalCost += dataCost;
  } else {
    totalCost -= dataCost;
  }
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

/*Showing the credit card option by default and hiding the bitcoin and paypal 
option texts*/
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const payment = document.getElementById("payment");

paypal.hidden = true;
bitcoin.hidden = true;
payment.firstElementChild.nextElementSibling.selected = true;

/*using a change event listener and conditionals to display
selected payment option when clicked and hide other options*/
payment.addEventListener("change", (event) => {
  const paymentOption = event.target.value;
  console.log(paymentOption);
  if (paymentOption === "paypal") {
    creditCard.hidden = true;
    bitcoin.hidden = true;
    paypal.hidden = false;
  } else if (paymentOption === "bitcoin") {
    creditCard.hidden = true;
    bitcoin.hidden = false;
    paypal.hidden = true;
  } else {
    creditCard.hidden = false;
    bitcoin.hidden = true;
    paypal.hidden = true;
  }
});




//variable to target form element for the submit event listener
const form = document.querySelector("form");

/*I use the event listener to listen
for a change in the submit and use conditionals to make sure my validation tests are all passed 
so the form is able to submit if all tests passed. 
*/
form.addEventListener("submit", (event) => {

const nameField = name.value;
const nameTest = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameField);

const email = document.getElementById("email");
const emailField = email.value;
const emailTest = /^[^@]+@[^@]+\.com$/i.test(emailField);

const activitiesBox = document.getElementById("activities-box");
const activitiesLabel = activitiesBox.previousElementSibling;
const activityTest = totalCost > 0;

const paymentMethod = payment.value;

const cardNumber = document.getElementById("cc-num");
const cardnumberField = cardNumber.value;
const cardnumberTest = /^\d{13}\d?\d?\d?$/.test(cardnumberField);

const zipCode = document.getElementById("zip");
const zipcodeField = zipCode.value;
const zipcodeTest= /^\d{5}$/.test(zipcodeField);

const cvv = document.getElementById("cvv");
const cvvField = cvv.value;
const cvvTest = /^\d{3}$/.test(cvvField);



/*If input is not entered correctly, error message will appear, error triangle is added, and valid checkbox is removed. 
If input is entered correctly, error message is not displayed, valid checkbox is added, and not valid triangle is removed.  */
if(!nameTest) {
    event.preventDefault();
    validationFail(name);
} else {
    validationPass(name);
}

if(!emailTest) {
    event.preventDefault();
    validationFail(email);
} else {
    validationPass(email);
} 

if (!activityTest) {
    event.preventDefault();
    activitiesLabel.classList.add("not-valid");
    activitiesLabel.classList.remove("valid");
    activities.lastElementChild.style.display = "block";

} else if (activityTest) {
    activitiesLabel.classList.add("valid");
    activitiesLabel.classList.remove("not-valid");
    activities.lastElementChild.style.display = "none";

}


if (paymentMethod === 'credit-card') {
    if (!cardnumberTest || !zipcodeTest || !cvvTest) {
        event.preventDefault();
    }
    if (!cardnumberTest) {
        validationFail(cardNumber);
    } else {
        validationPass(cardNumber);
    }
    if (!zipcodeTest) {
        validationFail(zipCode);
    } else {
        validationPass(zipCode);
    }
    if (!cvvTest) {
        validationFail(cvv);
    } else {
        validationPass(cvv);
    }
    
}


});

// Accessibility - helper functions I use with name, email, and credit card elements to test validation in the form submit event listener
function validationPass(element){
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid");
    element.parentElement.lastElementChild.style.display = "none";
}

function validationFail(element) {
    element.parentElement.classList.add("not-valid");
    element.parentElement.classList.remove("valid");
    element.parentElement.lastElementChild.style.display = "block";  
}



// Accessibility - adds focus to the activities checkboxes
let checkboxes = document.querySelectorAll('input[type=checkbox]');
for (let i=0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', (e) => {
        checkboxes[i].parentElement.classList = "focus";
    });
    checkboxes[i].addEventListener('blur', (e) => {
        checkboxes[i].parentElement.classList.remove("focus");
    });
}