let ham=document.querySelector('.ham')
let box=document.querySelector('.box')
let cross=document.querySelector('.cross')
let side=document.querySelector('.sidebar')
let tweet=document.querySelector('.home-sci .tweet')

cross.style.display="none";

ham.addEventListener('click',()=>{
    
    side.classList.toggle("sidebargo")
    if(side.classList.contains('sidebargo')){
        box.style.display="inline";
        cross.style.display="none";
    }
    else{
        box.style.display="none";
        cross.style.display="inline";
    }
})  
    let typed = new Typed('.text',{
    strings:["Programmer","Front-End Developer","Footballer"], 
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    })