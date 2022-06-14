//Default focus on name field when page first loads
window.onload = function () {
    document.getElementById("name").focus();
}

//Hiding other job role text field by default
const other = document.getElementById('other-job-role');
other.style.display = 'none';



/*Function that uses conditional to check if user chooses 'other job role'. If so,
the default hidden display for 'other job role' text field will be blocked and appear to the user. */
function displayotherjobRole() {
    const jobOption = document.getElementById('title').value;
    if (jobOption == 'other') {
        other.style.display = 'block';
    } else {
        other.style.display = 'none';
    }

}

//Disabling the T-shirt Color options by default
const colorOptions= document.getElementById('color').setAttribute('disabled', 'disabled');








