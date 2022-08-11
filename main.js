let my_btn = document.getElementById("upbtn");

window.onscroll=function(){
    if(window.scrollY>=500){
        my_btn.style.display="block";
    }else{
        my_btn.style.display="none";
    }
};
my_btn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
};