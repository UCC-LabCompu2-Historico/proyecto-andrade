/**
 * Created by Aye on 31/05/2018.
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "proyecto-andrade/images/Erlemeyer2.png";
img.onload = function () {
  ctx.drawImage(img, 0, 0, 400, 500);
    
}