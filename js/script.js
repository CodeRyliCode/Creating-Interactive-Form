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

/*using a change event listener to target and loop through options
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


/*using a change event listener to add and subtract costs
of activities that are checked/unchecked and displaying total cost in real time*/
const activities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
let totalCost = 0;

activities.addEventListener("change", (event) => {
  dataCost = event.target.getAttribute("data-cost");
  dataCost = +dataCost;
  if(event.target.checked == true) {
    totalCost += dataCost;
  } else {
totalCost -= dataCost;
  }
  activitiesCost.innerHTML = `Total: $${totalCost}`;
  });

