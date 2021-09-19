// *Set the total bill amount
var billAmount = 0;
const bill = document.querySelector("#billTotal");
bill.addEventListener("blur", () => {
    if (bill.value == "") {
        billAmount = 0;
    } else {
        billAmount = bill.value;
    }
    console.log(billAmount);
});



// *Set the total tip to pay

var tipAmount = 0;
const options = document.querySelector(".tipOptions").children;
// options available to select from
const option1 = options[0];
const option2 = options[1];
const option3 = options[2];
const option4 = options[3];
const option5 = options[4];
const option6 = options[5];

// event Listeners for the option values of tip
option1.addEventListener('click', () => {
    tipAmount = 5 / 100;
    option1.style.color = "hsl(183, 100%, 15%)";
    option1.style.backgroundColor = "hsl(184, 14%, 56%)";

    option2.style.color = "hsl(183, 100%, 15%)";
    option2.style.backgroundColor = "hsl(189, 41%, 97%)";
    option3.style.color = "hsl(183, 100%, 15%)";
    option3.style.backgroundColor = "hsl(189, 41%, 97%)";
    option4.style.color = "hsl(183, 100%, 15%)";
    option4.style.backgroundColor = "hsl(189, 41%, 97%)";
    option5.style.color = "hsl(183, 100%, 15%)";
    option5.style.backgroundColor = "hsl(189, 41%, 97%)";

    console.log(tipAmount);
});


option2.addEventListener('click', () => {
    tipAmount = 10 / 100;
    option2.style.color = "hsl(183, 100%, 15%)";
    option2.style.backgroundColor = "hsl(184, 14%, 56%)";

    option1.style.color = "hsl(183, 100%, 15%)";
    option1.style.backgroundColor = "hsl(189, 41%, 97%)";
    option3.style.color = "hsl(183, 100%, 15%)";
    option3.style.backgroundColor = "hsl(189, 41%, 97%)";
    option4.style.color = "hsl(183, 100%, 15%)";
    option4.style.backgroundColor = "hsl(189, 41%, 97%)";
    option5.style.color = "hsl(183, 100%, 15%)";
    option5.style.backgroundColor = "hsl(189, 41%, 97%)";

    console.log(tipAmount);
});


option3.addEventListener('click', () => {
    tipAmount = 15 / 100;
    option3.style.color = "hsl(183, 100%, 15%)";
    option3.style.backgroundColor = "hsl(184, 14%, 56%)";

    option1.style.color = "hsl(183, 100%, 15%)";
    option1.style.backgroundColor = "hsl(189, 41%, 97%)";
    option2.style.color = "hsl(183, 100%, 15%)";
    option2.style.backgroundColor = "hsl(189, 41%, 97%)";
    option4.style.color = "hsl(183, 100%, 15%)";
    option4.style.backgroundColor = "hsl(189, 41%, 97%)";
    option5.style.color = "hsl(183, 100%, 15%)";
    option5.style.backgroundColor = "hsl(189, 41%, 97%)";

    console.log(tipAmount);
});


option4.addEventListener('click', () => {
    tipAmount = 25 / 100;
    option4.style.color = "hsl(183, 100%, 15%)";
    option4.style.backgroundColor = "hsl(184, 14%, 56%)";

    option1.style.color = "hsl(183, 100%, 15%)";
    option1.style.backgroundColor = "hsl(189, 41%, 97%)";
    option2.style.color = "hsl(183, 100%, 15%)";
    option2.style.backgroundColor = "hsl(189, 41%, 97%)";
    option3.style.color = "hsl(183, 100%, 15%)";
    option3.style.backgroundColor = "hsl(189, 41%, 97%)";
    option5.style.color = "hsl(183, 100%, 15%)";
    option5.style.backgroundColor = "hsl(189, 41%, 97%)";

    console.log(tipAmount);
});


option5.addEventListener('click', () => {
    tipAmount = 50 / 100;
    option5.style.color = "hsl(183, 100%, 15%)";
    option5.style.backgroundColor = "hsl(184, 14%, 56%)";

    option1.style.color = "hsl(183, 100%, 15%)";
    option1.style.backgroundColor = "hsl(189, 41%, 97%)";
    option2.style.color = "hsl(183, 100%, 15%)";
    option2.style.backgroundColor = "hsl(189, 41%, 97%)";
    option3.style.color = "hsl(183, 100%, 15%)";
    option3.style.backgroundColor = "hsl(189, 41%, 97%)";
    option4.style.color = "hsl(183, 100%, 15%)";
    option4.style.backgroundColor = "hsl(189, 41%, 97%)";

    console.log(tipAmount);
});


option6.addEventListener('focus', () => {
    option1.style.backgroundColor = "hsl(183, 100%, 15%)";
    option1.style.color = "hsl(189, 41%, 97%)";
    option2.style.backgroundColor = "hsl(183, 100%, 15%)";
    option2.style.color = "hsl(189, 41%, 97%)";
    option3.style.backgroundColor = "hsl(183, 100%, 15%)";
    option3.style.color = "hsl(189, 41%, 97%)";
    option4.style.backgroundColor = "hsl(183, 100%, 15%)";
    option4.style.color = "hsl(189, 41%, 97%)";
    option5.style.backgroundColor = "hsl(183, 100%, 15%)";
    option5.style.color = "hsl(189, 41%, 97%)";
});

option6.addEventListener('blur', () => {
    if (option6.value == "" || option6.value == 0) {
        tipAmount = 0;
    } else {
        tipAmount = parseInt(option6.value) / 100;
    }
    console.log(parseInt(tipAmount));
});




// *Set the number of people
var totalPeople = 0;
const people = document.querySelector("#numberOfPeople");
people.addEventListener("blur", () => {
    if (people.value == "" || people.value < 1) {
        people.style.border = "solid red";
        document.getElementById("errorMessage").style.color = "red";
        totalPeople = 0;
    } else {
        people.style.border = "solid hsl(185, 41%, 84%)";
        document.getElementById("errorMessage").style.color = "white";
        totalPeople = Math.round(people.value);

        // Printing out the bill content
        console.log("TOTAL BILL AMOUNT: " + billAmount);
        console.log("TOTAL TIP PERCENT: " + tipAmount * 100 + "%");
        console.log("NO OF PEOPLE: " + totalPeople);

        var tip = (billAmount * tipAmount);
        console.log(tip);
        var tipPerPerson = ((billAmount * tipAmount) / totalPeople).toFixed(2);
        console.log("TIP PER PERSON: " + tipPerPerson);

        var billPerPerson = ((parseInt(billAmount) + parseFloat(tip)) / totalPeople).toFixed(2);
        console.log("BILL PER PERSON: " + billPerPerson);

        const tipValue = document.querySelector("#tipValue");
        const totalValue = document.querySelector("#totalValue");

        tipValue.textContent = "$" + tipPerPerson;
        totalValue.textContent = "$" + billPerPerson;
    }
});


// *Function to reset the content of the page refrehing the page
function reset() {

    // TODO: Reset the variable values also
    billAmount = 0;
    tipAmount = 0;
    totalPeople = 0;

    // resetting the input values
    document.getElementById("billTotal").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("numberOfPeople").value = "";
    document.getElementById("errorMessage").setAttribute("style", "color:white;");
    document.getElementById("numberOfPeople").setAttribute("style", "border:solid hsl(185, 41%, 84%)");
    option1.style.backgroundColor = "hsl(183, 100%, 15%)";
    option1.style.color = "hsl(189, 41%, 97%)";
    option2.style.backgroundColor = "hsl(183, 100%, 15%)";
    option2.style.color = "hsl(189, 41%, 97%)";
    option3.style.backgroundColor = "hsl(183, 100%, 15%)";
    option3.style.color = "hsl(189, 41%, 97%)";
    option4.style.backgroundColor = "hsl(183, 100%, 15%)";
    option4.style.color = "hsl(189, 41%, 97%)";
    option5.style.backgroundColor = "hsl(183, 100%, 15%)";
    option5.style.color = "hsl(189, 41%, 97%)";

    //resetting the tip/person and total/person
    document.getElementById("tipValue").textContent = "$0.00";
    document.getElementById("totalValue").textContent = "$0.00";
}



