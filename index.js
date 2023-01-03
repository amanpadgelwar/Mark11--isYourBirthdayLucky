var inputNumber =document.querySelector(".LuckyNumber");

var checkButton=document.querySelector(".check");
var dob=document.querySelector(".DOB");
var outputResults=document.querySelector(".outputResults")


  


function sumOfDigits(newDate){
    var newDate =dob.value.replaceAll("-","");//converting date string to date string without hyphen
    sum=0; 
   
        for (let i=0;i<8;i++){
            numberPos= Number(newDate.charAt(i));
            sum=sum +numberPos
        }
        return sum;
}



function luck ()
{
   console.log(inputNumber.value);
   console.log(sumOfDigits())
console.log(sumOfDigits() %inputNumber.value)
if (sumOfDigits() %inputNumber ===0){

    outputResults.innerHTML="Hurray!You are lucky"
    console.log("Hurray!You are lucky")
}
else{
    outputResults.innerHTML="You are not so lucky afterall!"
    console.log("You are not so lucky afterall!")
}

}

checkButton.addEventListener('click',luck)
