let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
let btn5=document.querySelector("#btn5");
let btn6=document.querySelector("#btn6");
let btn7=document.querySelector("#btn7");
let btn8=document.querySelector("#btn8");
let btn9=document.querySelector("#btn9");
let btn10=document.querySelector("#btn10");
let btn11=document.querySelector("#btn11");
let btn12=document.querySelector("#btn12");
let btn13=document.querySelector("#btn13");
let btn14=document.querySelector("#btn14");
let btn15=document.querySelector("#btn15");
let btn16=document.querySelector("#btn16");

let display="";

let result;

// +++++

let input=document.querySelector("#input").value=display;

btn1.addEventListener("click",function(){
    display=display+"1";
    input=document.querySelector("#input").value=display;
})


btn2.addEventListener("click",function(){
    display=display+"2";
    input=document.querySelector("#input").value=display;
})


btn3.addEventListener("click",function(){
    display=display+"3";
    input=document.querySelector("#input").value=display;
})


btn4.addEventListener("click",function(){
    display=display+"4";
    input=document.querySelector("#input").value=display;
})


btn5.addEventListener("click",function(){
    display=display+"5";
    input=document.querySelector("#input").value=display;
})

btn6.addEventListener("click",function(){
    display=display+"6";
    input=document.querySelector("#input").value=display;
})


btn7.addEventListener("click",function(){
    display=display+"7";
    input=document.querySelector("#input").value=display;
})


btn8.addEventListener("click",function(){
    display=display+"8";
    input=document.querySelector("#input").value=display;
})


btn9.addEventListener("click",function(){
    display=display+"9";
    input=document.querySelector("#input").value=display;
})


btn10.addEventListener("click",function(){
    display=display+"0";
    input=document.querySelector("#input").value=display;
})


btn11.addEventListener("click",function(){
    display=display+"+";
    input=document.querySelector("#input").value=display;
})


btn12.addEventListener("click",function(){
    display=display+"-";
    input=document.querySelector("#input").value=display;
})


btn13.addEventListener("click",function(){
    display=display+"*";
    input=document.querySelector("#input").value=display;
})


btn14.addEventListener("click",function(){
    display="";
    input=document.querySelector("#input").value=display;
})



btn15.addEventListener("click",function(){
    display=display+"/";
    input=document.querySelector("#input").value=display;
})


btn16.addEventListener("click",function(){
 result=eval(display);
 display=result;
 input=document.querySelector("#input").value=display;
})