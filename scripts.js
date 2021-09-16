let dob = document.querySelector("#dob");
let luckyNum = document.querySelector("#luckyNum");
let showLucky = document.querySelector("#showLucky");
let btnCheck = document.querySelector("#btn-check");

showLucky.style.display = "none";


function divide(someDate, someNum) {
    showLucky.style.display = "block";
    if (someNum == 0 || someDate == "") {                 
        showLucky.innerText = "🚫 Please enter a valid input!"      
    } else {
        let answer = someDate % someNum;       
        
        if (!answer) {            
            showLucky.innerText = " 🎉 YAY ! Your birthday is lucky 🎁";
        } else {            
            showLucky.innerText = "Aww... Your birthday is not that lucky for this number 🤝";
        }
    }    
}

function getDigits(dateString) {
    let date = dateString.replaceAll("-", "");    
    let total = 0;
    for (let i = 0; i < date.length; i++) {
        total = total + Number(date.charAt(i));
    }
    return total;
}

function checkLucky() {      
    let addedDate = getDigits(dob.value);
    divide(addedDate, luckyNum.value);    
}

btnCheck.addEventListener("click", checkLucky);