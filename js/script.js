//Default focus on name field when page first loads
window.onload = function () {
  document.getElementById("name").focus();
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
const labelPayment = payment.previousElementSibling;

paypal.hidden = true;
bitcoin.hidden = true;
payment.firstElementChild.nextElementSibling.selected = true;



/*using a change event listener and conditionals to display
selected payment option when clicked and hide other options*/
payment.addEventListener("change", (event) => {
    const paymentOption = event.target.value;
    console.log(paymentOption);
    if (paymentOption === 'paypal') {
        creditCard.hidden = true;
        bitcoin.hidden = true;
        paypal.hidden = false;
      } else if (paymentOption === 'bitcoin'){
        creditCard.hidden = true;
        bitcoin.hidden = false;
        paypal.hidden = true;
      } else {
        creditCard.hidden = false;
        bitcoin.hidden = true;
        paypal.hidden = true;
      }

 });


