var luckyNumber =document.querySelector(".LuckyNumber");
var dob=document.querySelector(".DOB");
var checkButton=document.querySelector(".check");


function luck()

{

 console.log(sumOfDigits(newDate));
}

function sumOfDigits(newDate){
 
    var newDate =dob.value.replaceAll("-","");//converting date string to date string without hyphen

        sum =0;
        for (let i=0;i<newDate.length;i++){
            sum=sum +number(newDate.charAt(i));
        }
        return sum;
}


checkButton.addEventListener('click',luck)
