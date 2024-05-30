
//function to do the calculation
const calcAmount = function() {
    let totalBill = totalBillInput.value;
    let percentage = percentages.value;
    let numOfPeople = person.value;

    //then do the calculation
    let totalPerPerson = ((totalBill * percentage / 100) + totalBill) / numOfPeople; 
    let tipPerPerson = ((totalBill * percentage / 100) + totalBill) / numOfPeople; 

    // TODO: Update textcontent 
    // TODO: validate values, return error msgs 
}


const totalBillInput = document.querySelector("#totalBill");
const percentages = document.querySelectorAll(".percentages");
const customTip = document.querySelector("#custom");
const person = document.querySelector("#person");



// TODO: add eventlistener to totalBillInput, percentages, customTip, and person)
totalBillInput.addEventListener("input", calcAmount);
person.addEventListener("input", calcAmount)

