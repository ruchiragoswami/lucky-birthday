let dob = document.querySelector("#dob");
let luckyNum = document.querySelector("#luckyNum");
let showLucky  = document.querySelector("#showLucky");
let btnCheck = document.querySelector("#btn-check");

showLucky.style.display="none"; 

function divide(someDate, someNum) {
    let answer=  someDate % someNum; 
    console.log(answer + " is your answer"); 
    showLucky.style.display="block";
    if (!answer) {
        console.log("Your birthday is lucky");
        showLucky.innerText= " YAY ! Your birthday is lucky" ;
    } else {
        console.log("your birtday is not lucky");
        showLucky.innerText = "Aww... Your birthday is not that lucky for this number";
    }
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

