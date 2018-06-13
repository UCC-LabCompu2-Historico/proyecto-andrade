/**
 * Created by Aye on 31/05/2018.
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "images/Erlenmeyer2.png";
img.onload = dibujar;

function dibujar(cantidad) {

    //ctx.globalCompositeOperation = 'destination-over';

    ctx.beginPath() ;
        ctx.moveTo(140, 242);
        ctx.lineTo(33, 242);
        ctx.moveTo(33, 242);
        ctx.lineTo(18, 220);
        ctx.moveTo(18, 220);
        ctx.lineTo(75, 35);
        ctx.moveTo(75, 35);
        ctx.lineTo(93, 35);
        ctx.moveTo(93, 35);
        ctx.lineTo(152, 215);
        ctx.moveTo(152, 215);
        ctx.lineTo(140,242);
    ctx.stroke();
    ctx.closePath();
    
    ctx.drawImage(img, 0, 0, 170, 250);


}
function mensaje() {
    document.getElementById("seleccion").innerHTML = "de la base débil";
}
function mensaje2() {
    document.getElementById("seleccion").innerHTML = "del ácido débil";
    alert("seleccionaste ácido débil");

}

function calcular_concentracion() {
    /* if (mL2) {

     }
     volumen_analito= document.getElementById("mL").value;
     NO SE COMO HACER QUE SI AMBOS VOLUMENES SON IGUALES, QUE SE HAGA LA CUENTA IGUAL
     */
    if (isNaN(document.getElementById("volumen_analito").value) || isNaN(document.getElementById("volumen_titulante").value) || isNaN(document.getElementById("concentracion_titulante").value)) {
        alert("solo se puede ingresar numeros");

    }
    else {
        var dL = document.getElementById(dL).value;
        var L = document.getElementById(L).value;
        var mL = document.getElementById(mL).value;
        if ( dL)
            volumen_titulante = volumen_titulante * 100;
        else if (volumen_titulante == L)
            volumen_titulante = volumen_titulante * 1000;
        /*else if (volumen_titulante = mL)
            volumen_titulante = volumen_titulante;*/


        var volumen_analito = document.getElementById("volumen_analito").value;
        var volumen_titulante = document.getElementById("volumen_titulante").value;
        var concentracion_titulante = document.getElementById("concentracion_titulante").value;
        var resultado = concentracion_titulante * volumen_titulante / volumen_analito;
        document.getElementById("resultado").innerHTML = resultado;
    }

