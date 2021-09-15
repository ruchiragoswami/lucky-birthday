let dob = document.querySelector("#dob");
let luckyNum = document.querySelector("#luckyNum");
let btnCheck = document.querySelector("#btn-check");


function divide(someDate, someNum) {
    let answer=  someDate % someNum; 
    console.log(answer + " is your answer"); 
}


function getDigits(dateString) {
    let date = dateString.replaceAll("-", ""); 
    console.log(date);

    let total = 0; 
    for (let i=0; i<date.length; i++) {
        total = total + Number(date.charAt(i));       
    }  
    console.log(`Your total is ${total}`); 
    return total;    
}


function checkLucky() {
    console.log( "You entered " + luckyNum.value + " as number & " + dob.value ); 
    let  addedDate = getDigits(dob.value);  
    divide(addedDate, luckyNum.value);
}


btnCheck.addEventListener("click", checkLucky);

