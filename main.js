var mouseEvent="empty";
var lastpositionofx,lastpostitionofy;
canvas=document.getElementById("MyCanvas");
cpx=canvas.getContext("2d");
color="black";
widthofline="1"
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("widthofline").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mymousmove);
function mymousemove(e){
    currentpositionofmousex = e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clientY - canvas.offsetLeft;
    if (mouseEvent == "mouseDown") { 
        ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = widthofline;
        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy); ctx.moveTo(lastpositionofx, lastpositionofy);
        console.log("Current position of x and y coordinates = "); console.log("x = " + currentpositionofmousex + "y = " + currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey); ctx.stroke(); 
}
lastpositionofx="currentpositionofmousex";
lastpositionofy="currentpositionofmousey";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}
function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}
