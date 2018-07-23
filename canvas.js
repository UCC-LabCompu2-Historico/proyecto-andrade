/**
 * Created by Aye on 31/05/2018.
 */
var canvas = document.getElementById("canvas"); // llama al elemento de html 'canvas'
var ctx = canvas.getContext("2d");   //funciones de dibujo en un contexto 2D


var cantidad = 0; //declara la variable 'cantidad'
var max_cant = 0; //declara la variable 'max_cant'

function dibujar(cantidad) {  //llama a la funcion dibujar

    //ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,canvas.width, canvas.height);    //limpia el canvas

    ctx.beginPath() ;    //dibuja en canvas
        ctx.moveTo(30, 245);  //de aqui en adelante determina los puntos donde se dibuja la forma del Beaker
        ctx.lineTo(140, 245);
        ctx.moveTo(30, 245);
        ctx.lineTo(30, 100);
        ctx.moveTo(140, 245);
        ctx.lineTo(140, 130);
        ctx.moveTo(140, 130);
        ctx.lineTo(160, 100);
        ctx.moveTo(30, 100);
        ctx.lineTo(160, 100);
    ctx.stroke();  //dibuja la forma del Beaker en el canvas
    ctx.closePath(); //une el ultimo punto con el primero

    max_cant = cantidad*30; // le da el valor de relleno a la figura del canvas
    
    //x.drawImage(img, 0, 0, 170, 250);

    setInterval(animar, 100); //llama la funcion de relleno en un intervalo de tiempo de 0,1 segundos
}
function mensaje() { //llama a la funcion mensaje para el display de un mensaje al seleccionar un radio
    document.getElementById("seleccion").innerHTML = "de la base débil";
    alert("seleccionaste base débil");
}
function mensaje2() { //llama a la funcion mensaje2 para el display de un mensaje al seleccionar un radio
    document.getElementById("seleccion").innerHTML = "del ácido débil";
    alert("seleccionaste ácido débil");}

function animar(){ //llama a la funcion animar para el relleno de la forma dibujada
    ctx.beginPath(); //comienza el path de relleno
    ctx.fillStyle = "#fff000"; //estilo de relleno
    ctx.fillRect(31, 244, 108, -cantidad); //parametros de relleno
    ctx.closePath(); //cierra el lugar de relleno

    ctx.beginPath() ; //comienza el path de relleno
    for(var i = 0; i < 12; i++){ //ciclo para determinar el patron de relleno de la forma con puntos
        ctx.moveTo(30, 230 - (i*10)); //determinados y lineas dibujadas
        ctx.lineTo(40, 230 - (i*10));
    }
    ctx.stroke(); //dibuja la forma con los puntos anteriores
    ctx.closePath(); //cierra el lugar de relleno

    if(cantidad < max_cant && cantidad < 100) //si se cumplen estos parametros, aumenta el valor de la variable 'cantidad' en uno
            cantidad++;
}

function calcular_concentracion() { //llama a la funcion calcular_concentracion para hacer calculos
     
    if (isNaN(document.getElementById("volumen_analito").value) || isNaN(document.getElementById("volumen_titulante").value) || isNaN(document.getElementById("concentracion_titulante").value)) {
        alert("solo se puede ingresar numeros"); //se muestra en un mensaje de display que solo se pueden ingresar numeros, no letras

    }
    else {



        var volumen_analito = document.getElementById("volumen_analito").value;  //llama al elemento de html 'volumen_analito' y lo asigna a la variable volumen_analito
        var volumen_titulante = document.getElementById("volumen_titulante").value; //llama al elemento 'volumen_titulante' y lo asigna a la variable volumen_titulante
        var volumen1 = document.getElementById("volumen1").value; //llama al elemento 'volumen1' y lo asigna a la variable volumen1
        var volumen2 = document.getElementById("volumen2").value; //llama al elemento 'volumen2' y lo asigna a la variable volumen2
        var concentracion_titulante = document.getElementById("concentracion_titulante").value; //llama al elemento 'concentracion_titulante' y lo asigna a la variable concentracion_titulante
        console.log(parseFloat(concentracion_titulante));  //imprime en consola un mensaje
        console.log(parseFloat(volumen_titulante*volumen1)); //toma el valor obtenido de la operacion como variable float
        console.log(parseFloat(volumen_analito*volumen2));
        var result = parseFloat(concentracion_titulante) * parseFloat(volumen_titulante*volumen1) / parseFloat(volumen_analito*volumen2); //asigna a la variable 'result' el valor de la operacion final
        console.log(result); 
        document.getElementById("resultado").innerHTML = result; //llama al elemento html 'resultado' y le asigna la variable resultado

        dibujar(volumen_titulante*volumen1); //llama a la funcion dibujar segun el valor del calculo volumen_titulante*volumen1
    }

}