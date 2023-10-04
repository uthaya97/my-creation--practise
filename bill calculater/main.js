function amount(){
let bill=document.getElementById("bill").value
console.log(bill);
let percentage=document.getElementById("percentage").value;
console.log(percentage);

let result=Number(bill)/100*Number(percentage)
console.log(result);

let tips=document.getElementById("tips").value=result
console.log(tips);

let output=Number(bill)+Number(result);

let a=document.getElementById("total").value=output
}