let dob = document.querySelector("#dob");
let luckyNum = document.querySelector("#luckyNum");
let btnCheck = document.querySelector("#btn-check");



function checkLucky() {
    console.log( "You entered " + luckyNum.value + " as number & " + dob.value ); 
}


btnCheck.addEventListener("click", checkLucky);