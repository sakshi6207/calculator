let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue=' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
console.log('button text is',buttonText);
   
   if(buttonText == 'X'){
       buttonText="*";
screenValue=screenValue+buttonText;
screen.value=screenValue;
   }
  else if(buttonText =='C'){
    screenValue=" ";
screen.value=screenValue;
       }
       else if (buttonText == '=') {
        screen.value = eval(screenValue);
    }
    else if(buttonText=='sin'){
        screenValue=Math.sin(buttonText);
        screen.value=screenValue;
    }
    else if(buttonText=='cos'){
        screenValue=Math.cos(buttonText);
        screen.value=screenValue;
    }
    else if(buttonText=='tan'){
        screenValue=Math.tan(buttonText);
        screen.value=screenValue;
    }
    else if(buttonText=='del'){
        screenValue=screenValue.slice(0,-1);
        screen.value=screenValue;}
           else{
            screenValue=screenValue+buttonText;
            screen.value=screenValue;
           }


})
}