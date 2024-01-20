let operations = document.querySelectorAll(".operations");
let question = document.querySelector(".question");
let bracket = document.querySelector(".brackets");
let signChange = document.querySelector(".plus-minus")
let clear1 = document.querySelector(".clear");
let numbers = ["1","2","3","4","5","6","7","8","9","0","."];
let operators = ["*","+","-","/","%"];
let last = document.querySelector(".last-2");
let text1 = [];
let result1 = document.querySelector(".result");
let content = result1.textContent;
let afterResult ="";


function addBracket(){
    let check = 1;
    bracket.addEventListener("click",()=>{
        if(text1.length != 0 && text1[0] != 0){
          if(check == 1){
            text1.splice(0,0,"(");
            text1.push(")");
              question.textContent = text1.join("");
              check--;
          }else{
            text1.shift();
            text1.pop();
              question.textContent = text1.join("");
              check++;
          }
        }
      });
}




operations.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(numbers.includes(e.textContent)){
            if(text1[0] != 0){
                text1.push(e.textContent);
                question.textContent  = text1.join("");
            }

        }
        
        else if(e.textContent == "C"){
            question.textContent = "";
            text1=[];
            result1.textContent = "";
        }

        else if(operators.includes(e.textContent) && text1[0] != 0){
            if(text1.length != 0){
                text1.push(e.textContent);
                question.textContent = text1.join("");
            }
        }  

        
    })
});


addBracket();

clear1.addEventListener("click",()=>{
    text1 = text1.slice(0,text1.length-1)
    question.textContent = text1.join("");
});

signChange.addEventListener("click",()=>{
    if(Number.parseInt(text1.join("")) > 0){

        text1 = ["-" , ...(text1.join(""))]
        question.textContent = text1.join("");
    }
    else{
        text1 = text1.slice(1,text1.length);
        question.textContent = text1.join("");
    }
    console.log(text1);
});

last.addEventListener("click",()=>{
    afterResult = eval(text1.join(""));
    result1.textContent = Math.floor(afterResult*10)/10;
    text1=[];
    text1.push(afterResult);    
});



