const totalBillInput = document.querySelector("#totalBill");
const percentages = document.querySelectorAll(".percentages");
const customTip = document.querySelector("#custom");
const person = document.querySelector("#person");
const tipAmountSpan = document.querySelector("#tipAmount");
const totalAmountSpan = document.querySelector("#total");
const resetBtn = document.querySelector("#resetBtn");
let tipPercentage = 0;


//function to validate input values
const validateInputs = () => {
    const totalBill = parseFloat(totalBillInput.value);
    const numOfPeople = parseInt(person.value);

    if (isNaN(totalBill) || totalBill <= 0) {
        alert("Please enter a valid bill amount");
        return false;
    } 
    if (isNaN(numOfPeople) || numOfPeople <= 0) {
        // alert("number of people can't be zero!");
        return false;
    }
    return true;
}


//function to perform the calculation
const calcAmount = function() {
    if (!validateInputs()) return; 

    const totalBill = parseFloat(totalBillInput.value);
    const numOfPeople = parseInt(person.value);
    let percentage = tipPercentage;
    if (customTip.value) {
        percentage = parseFloat(customTip.value);
        if (isNaN(percentage) || percentage < 0) {
            alert("Please enter a valid custom tip percentage"); 
            return; 
        }
    }

    //then do the calculation
    const totalPerPerson = ((totalBill * percentage / 100) + totalBill) / numOfPeople; 
    const tipPerPerson = (totalBill * percentage / 100) / numOfPeople; 

    // Update textcontent 
    tipAmountSpan.textContent = tipPerPerson.toFixed(2);
    totalAmountSpan.textContent = totalPerPerson.toFixed(2);
  
}



// add eventlistener to totalBillInput, percentages, customTip, and person)
totalBillInput.addEventListener("input", calcAmount);
person.addEventListener("input", calcAmount)
percentages.forEach(btn => {
    btn.addEventListener("click", (e) => {
        tipPercentage = parseFloat(e.target.value);
        customTip.value = "";
        calcAmount();
    });
})

//TODO: add custom tip logic
//TODO: style reset btn after click


//reset function
resetBtn.addEventListener("click", () => {
    totalBillInput.value = "";
    person.value = "";
    customTip.value = "";
    tipAmountSpan.textContent = "0.00";
    totalAmountSpan.textContent = "0.00";
    tipPercentage = 0;
})