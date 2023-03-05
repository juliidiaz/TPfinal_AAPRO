let ingreso = prompt ("Sos mayor de edad? Contestar: si/no");

if (ingreso == "si") {
    alert ("Bienvenid@")
}
else {
    alert ("Ud. está entrando bajo su responsabilidad");}


//POP UP//

let salida = document.querySelector ('#emitiralerta');


function emitiralerta() {
    let resultado = window.confirm('Estas seguro que deseas salir?');
   

if (resultado === true) {
    $(location).attr('href',url);
} else { 
    window.alert('Pareces indeciso');
}}




