const totalBillInput = document.querySelector("#totalBill");
const percentages = document.querySelectorAll(".percentages");
const customTip = document.querySelector("#custom");
const person = document.querySelector("#person");
const tipAmountSpan = document.querySelector("#tipAmount");
const totalAmountSpan = document.querySelector("#total");
const resetBtn = document.querySelector("#resetBtn");
const billAlert = document.querySelector("#billAlert");
const peopleAlert = document.querySelector("#peopleAlert");
let tipPercentage = 0;
let btnSelected = null;


//function to validate input values
const validateInputs = () => {
    const totalBill = parseFloat(totalBillInput.value);
    const numOfPeople = parseInt(person.value);

    if (isNaN(totalBill) || totalBill <= 0) {
        billAlert.textContent = "Invalid bill amount!"
        return false;
    } else {
        billAlert.textContent = "";
    }

    if (isNaN(numOfPeople) || numOfPeople <= 0) {
        peopleAlert.textContent = "Can't be zero or negative! "
        return false;
    } else {
        peopleAlert.textContent = "";
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
    
    updateResetButtonColor();
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
        if (btnSelected) {
            btnSelected.style.backgroundColor = "";
            btnSelected.style.color = "";
        }
        e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
        e.target.style.color = "hsl(183, 100%, 15%)"; 
        btnSelected = e.target;

        customTip.value = "";
        calcAmount();
    });
})

//TODO: add custom tip logic



//reset function
resetBtn.addEventListener("click", () => {
    totalBillInput.value = "";
    person.value = "";
    customTip.value = "";
    tipAmountSpan.textContent = "0.00";
    totalAmountSpan.textContent = "0.00";
    tipPercentage = 0;
    resetBtn.style.backgroundColor = "";
    if (btnSelected) {
        btnSelected.style.backgroundColor = "";
        btnSelected.style.color = "";
        btnSelected = null; 
    }
})

// Function to update reset button color
const updateResetButtonColor = () => {
    const totalBill = parseFloat(totalBillInput.value);
    const numOfPeople = parseInt(person.value);
    const percentage = tipPercentage || parseFloat(customTip.value);

    if (totalBill || numOfPeople || percentage) {
      resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      resetBtn.style.backgroundColor = ""; 
      btnSelected.style.backgroundColor = "";
    }
  };