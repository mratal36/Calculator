let upper = document.querySelector(".upper");
let lower = document.querySelector(".lower");
let main = document.querySelector(".mainContainer");
let toggler = document.querySelector(".toggler");
let image = document.querySelector(".togglerImg");
let screen = document.querySelector(".screen");
let toggle = document.querySelector(".toggle");
let result = document.querySelector(".result");
let divison = document.querySelector(".seperator");
let clear = document.querySelector(".clear");
let container = document.querySelector(".op-container");
let first = document.querySelectorAll(".first-1");
let middle = document.querySelectorAll(".middle-1");
let last2 = document.querySelector(".last-2");
let text = document.querySelector(".text");
let check = 0;
toggle.addEventListener("click",()=>{
    if(check == 0){
        document.body.style.backgroundImage = "url('./svgfolder/download.jpeg')";
        lower.style.backgroundColor = "#847D6A";
        upper.style.backgroundColor = "#847D6A";
        main.style.backgroundColor = "#252628";
        main.style.borderColor = "grey";
        clear.style.backgroundColor = "#252628";
        container.style.backgroundColor = "#252628";
        toggler.style.backgroundColor = "#000";
        toggler.style.transform = "translateX(20px)"
        image.src = "./svgfolder/moon.svg";
        screen.style.backgroundColor = "#1B1C1E";
        toggle.style.backgroundColor = "#847D6A";
        toggle.style.borderColor = "#fff";
        divison.style.backgroundColor ="#fff"
        result.style.color ="#fff";
        first.forEach((e)=>{
            e.style.backgroundColor = "#847D6A";
        });
        middle.forEach((e)=>{
            e.style.backgroundColor = "#964B00";
        });
        last2.style.backgroundColor = "#F3A623";
        text.innerHTML = "Switch to Light";
        check++;
    }else{
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.backgroundImage = "url('')";

        lower.style.backgroundColor = "#F1AF60";
        upper.style.backgroundColor = "#F1AF60";
        main.style.backgroundColor = "#FFFFDD";
        clear.style.backgroundColor = "#FFFFDD";
        container.style.backgroundColor = "#FFFFDD";
        main.style.borderColor = "#F5CE9F";
        toggler.style.backgroundColor = "#F1AE5F";
        toggler.style.transform = "translateX(0)"
        image.src = "./svgfolder/sun.svg";
        screen.style.backgroundColor = "#FFF0D2";
        toggle.style.backgroundColor = "#fff";
        toggle.style.borderColor = "#F5CE9F";
        result.style.color ="#000";
        divison.style.backgroundColor = "#000";
        first.forEach((e)=>{
            e.style.backgroundColor = "#FFE3AA";
        });
        middle.forEach((e)=>{
            e.style.backgroundColor = "#F5CE9F";
        });
        last2.style.backgroundColor = "#FCD25F";
        text.innerHTML = "Switch to Dark";
        check--;
}
})


