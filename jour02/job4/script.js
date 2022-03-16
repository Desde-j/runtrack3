'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


// DETCTER TOUCHE
document.addEventListener('keypress',write);

function write(e){


    document.getElementById('keylogger').value += e.key;

}

  
});