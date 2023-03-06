let ingreso = prompt ("Sos mayor de edad? Contestar: si/no");

if (ingreso == "si") {
    alert ("Bienvenid@")
}
else {
    alert ("Ud. está entrando bajo su responsabilidad");}


//CALCULAR ENVIO//

let envio;
function calcularenvio() {
    let envio = prompt ("a cuántos km vive de San Nicolas?");

    if (envio <=40) {
        alert ("No se le cobrará envío");}

    else alert ("Se le cobrará un envío de $800");}
