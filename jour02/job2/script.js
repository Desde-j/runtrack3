'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){

    
document.getElementById('button').onclick = function showhide(){
    let cit= document.getElementById('citation');

    if(cit.style.display !== "none")
    {
      cit.style.display = "none";
    }
    else{
        cit.style.display = "block";
         }
}

});