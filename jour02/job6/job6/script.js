'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    document.addEventListener('keydown', addone);
    var a = [];
    var cont = document.getElementById('container')

    function addone(event)
    {
        a += event.key;
        if (a == ("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"))
        {
            cont.style.display = "block";
            console.log('test')
        } 
    }


})