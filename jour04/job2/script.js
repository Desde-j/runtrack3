'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){

var a = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": 11, "creation":2019}'

    function jsonValueKey(string, key)
{
    var b = JSON.parse(string, key);
    console.log(b[key]);
}
 
    jsonValueKey(a,'address')

});