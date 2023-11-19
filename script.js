document.getElementById("main_button").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display ="flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display="none";
})

document.querySelector(".popup_button").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display="none";
})