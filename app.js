
//functions to calculate the amount
function TotalPerPerson(totalBill, percentage, person) {
    return ((totalBill * percentage / 100) + totalBill) / person; 
}

function tipPerPerson(totalBill, percentage, person) {
    return (totalBill * percentage / 100) / person;
}



