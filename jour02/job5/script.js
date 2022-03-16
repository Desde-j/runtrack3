'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){

    // on appelle la function
    let progress = document.getElementById("progress");

    document.addEventListener('scroll' , (event)=>{
    var footer = document.querySelector("footer");
    var scroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolledScreen =  (scroll/height)* 100;

    progress.value = scrolledScreen;

    var l = window.scrollY/10;
    footer.style.background = "linear-gradient(90deg, rgba(248,56,"+l+",56) 0%, rgba(148,187,"+l+",1) 100%)";
    
});

})