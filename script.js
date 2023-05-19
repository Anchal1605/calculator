let display= document.querySelector('input');
let string="";
let buttons=document.querySelectorAll('.btn');
var operand1 = 0 ; 
var operand2 = null ; 
var operator = null ; 
// let result=NULL;
for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(e){
        var temp=buttons[i].innerHTML;

        if(temp=='C')
        {
            string='';
            display.value=string;
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if(temp=='←')
        {
            var str=display.value;
            var newString=str.substring(0,str.length-1);
            display.value=newString;
        }
        else if(temp == '/'){
            operator = '/' ; 
            operand1 = parseFloat(display.value) ;
            display.value = "" ;  
        }
        else if(temp == '*'){
            operator = '*' ; 
            operand1 = parseFloat(display.value) ;
            display.value = "" ;  
        }
        else if(temp == '-'){
            operator = '-' ; 
            operand1 = parseFloat(display.value) ;
            display.value = "" ;  
        }
        else if(temp == '+'){
            operator = '+' ; 
            operand1 = parseFloat(display.value) ;
            console.log(operand1);
            display.value = "" ;  
        }
        else if( temp == "√"){
            operand1 = parseFloat(display.value) ; 
            display.value = Math.sqrt(operand1)  ; 
            operand1 = 0 ;
            operand2 = null ; 
            operator = null ;
        }
        else if(temp == "%"){
            operand1 = display.value ; 
            operator = "%" ; 
            display.value = "" ; 
        }
       
        //evaluating expressions

        else if(temp=='=')
        {
            if(operator==null)
            {
                display.value="NaN";
            }
            else if(operator == "+"){
                operand2 = parseFloat(display.value) ; 
                console.log(operand2);
                display.value = operand2 + operand1 ; 
            }
            else if(operator == "-"){
                operand2 = parseFloat(display.value) ; 
                console.log(operand2);
                display.value = operand1- operand2 ; 
            }
            else if(operator == "*"){
                operand2 = parseFloat(display.value) ; 
                console.log(operand2);
                display.value = operand2 * operand1 ; 
            }
            else if(operator == "%"){
                operand2 = parseFloat(display.value) ; 
                console.log(operand2);
                display.value = operand1 %operand2 ; 
            }
            else if(operator == "/"){
                operand2 = parseFloat(display.value) ; 
                console.log(operand2);
                if(operand2==0){
                    display.value="Infinity"
                }
                else{
                display.value = operand1 / operand2 ; 
                }
            }
        }
        else {
            display.value += temp ;
        }
    });
}
// let arr=Array.from(buttons);
// arr.forEach(element => {
//     element.addEventListener('click',(e)=>{
//     if(e.target.value=='='){
//         string=eval(string);
//     }
//     else if(e.target.value=='C'){
//         string="";
//     }
//     else{
//         // console.log(e.target);
//         string=string+e.target.value;
//     }
//     display.temp=string;
//     })
// });