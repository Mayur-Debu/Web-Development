

// Function to reset the content of the page refrehing the page
function reset() {

    // resetting the input values
    document.getElementById("billTotal").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("numberOfPeople").value = "";
    document.getElementById("errorMessage").setAttribute("style", "color:white;");
    document.getElementById("numberOfPeople").setAttribute("style", "border:solid hsl(185, 41%, 84%)");

    //resetting the tip/person and total/person
    document.getElementById("tipValue").textContent = "$0.00";
    document.getElementById("totalValue").textContent = "$0.00";
}