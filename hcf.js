//Retrieve the neccessary Html elements
var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");
var result = document.querySelector("#result");
var submit = document.getElementsByTagName("button")[0];
var refresh = document.querySelectorAll("button")[1];


//Submit entries for computation
submit.addEventListener("click", function(){
   var gcfResult =  gcf(firstNum.value, secondNum.value);
   result.value = gcfResult;
});

//Refresh the app
refresh.addEventListener("click", function(){
    firstNum.value = null;
    secondNum.value = null;
    result.value = null;
 });

function gcf(num1, num2){
    var r;
    if(num1 > num2){
        r = num1 % num2;
        while (r !== 0){
            num1 = num2;
            num2 = r;
            r = num1 % num2;
        }
        return num2;
    }else{
         r = num2 % num1;
        while (r !== 0){
            num2 = num1;
            num1 = r;
            r = num2 % num1;
        }
        return num1;
    }
 }
