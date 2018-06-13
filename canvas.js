/**
 * Created by Aye on 31/05/2018.
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var cantidad = 0;
var max_cant = 0;

function dibujar(cantidad) {

    //ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.beginPath() ;
        ctx.moveTo(30, 245);
        ctx.lineTo(140, 245);
        ctx.moveTo(30, 245);
        ctx.lineTo(30, 100);
        ctx.moveTo(140, 245);
        ctx.lineTo(140, 130);
        ctx.moveTo(140, 130);
        ctx.lineTo(160, 100);
        ctx.moveTo(30, 100);
        ctx.lineTo(160, 100);
    ctx.stroke();
    ctx.closePath();

    max_cant = cantidad*30;
    
    //x.drawImage(img, 0, 0, 170, 250);

    setInterval(animar, 100);
}

function animar(){
    ctx.beginPath();
    ctx.fillStyle = "#fff000";
    ctx.fillRect(31, 244, 108, -cantidad);
    ctx.closePath();

    ctx.beginPath() ;
    for(var i = 0; i < 12; i++){
        ctx.moveTo(30, 230 - (i*10));
        ctx.lineTo(40, 230 - (i*10));
    }
    ctx.stroke();
    ctx.closePath();

    if(cantidad < max_cant && cantidad < 100)
            cantidad++;
}

function calcular_concentracion() {
     
    if (isNaN(document.getElementById("volumen_analito").value) || isNaN(document.getElementById("volumen_titulante").value) || isNaN(document.getElementById("concentracion_titulante").value)) {
        alert("solo se puede ingresar numeros");

    }
    else {



        var volumen_analito = document.getElementById("volumen_analito").value;
        var volumen_titulante = document.getElementById("volumen_titulante").value;
        var volumen1 = document.getElementById("volumen1").value;
        var volumen2 = document.getElementById("volumen2").value;
        var concentracion_titulante = document.getElementById("concentracion_titulante").value;
        console.log(parseFloat(concentracion_titulante));
        console.log(parseFloat(volumen_titulante*volumen1));
        console.log(parseFloat(volumen_analito*volumen2));
        var result = parseFloat(concentracion_titulante) * parseFloat(volumen_titulante*volumen1) / parseFloat(volumen_analito*volumen2);
        console.log(result);
        document.getElementById("resultado").innerHTML = result;

        dibujar(volumen_titulante*volumen1);
    }

}