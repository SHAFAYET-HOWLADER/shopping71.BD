

function updateNumber(product, price, increasing){
    const phoneInput = document.getElementById(product + "-number");
    let phoneInputValue = phoneInput.value;
    if(increasing == true){
        phoneInputValue =parseInt(phoneInputValue) + 1;
    }
    else if(increasing == false && phoneInputValue > 0){
        phoneInputValue =parseInt(phoneInputValue) - 1;
    }
    phoneInput.value = phoneInputValue;
    //calculate phone total
   const phoneTotal = document.getElementById(product +"-total");
   phoneTotal.innerText = phoneInputValue * price;
   //calculate total
   calculator();
}

function getInput(product){
    const phoneInputValue = document.getElementById(product + "-number");
    const phoneNumber = parseInt(phoneInputValue.value);
    return phoneNumber;
}

function calculator(){
    const phoneTotal = getInput("phone") * 25000;
    const caseTotal = getInput("casing") * 60;
    const total = phoneTotal + caseTotal;    
    const subTotal =  document.getElementById("sub_total").innerText = total;
    const taxAmount = document.getElementById("tax_total").innerText = total / 10;
    document.getElementById("total").innerText = subTotal + taxAmount;
}

//increasing-decreasing phone number
document.getElementById("phone_plus").addEventListener("click", function(){
    updateNumber("phone", 25000, true);
})
document.getElementById("phone_minus").addEventListener("click", function(){
    updateNumber("phone", 25000, false);
})

//increasing-decreasing casing number
document.getElementById("casing_plus").addEventListener("click", function(){
    updateNumber("casing", 60,  true);
})
document.getElementById("casing_minus").addEventListener("click", function(){
    updateNumber("casing", 60, false);
})

// remove input value
document.getElementById("phone-cross").addEventListener("click", function(){
    const removeValue = document.getElementById("phone-number");
    removeValue.value = " ";
})
document.getElementById("casing-cross").addEventListener("click", function(){
  const removeValue = document.getElementById("casing-number");
  removeValue.value = " ";
})