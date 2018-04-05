window.onload=function(){
var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

ctx.rect(200, 100, 150, 150);
ctx.stroke();
 var i;
 var x=0;
 var y=0;
 var j;
for(i=0;i<9;i++){
	for(j=0;j<9;j++){
	ctx.fillRect( 210 + x , 110 + y, 10, 10);
	ctx.stroke();
	x=x+15;
 }
 y=y+15;
 x=0;
}

ctx.rect(550, 100, 150, 150);
ctx.stroke();
 //var i;
 x=0;
 y=0;
 //var j;
for(i=0;i<9;i++){
	for(j=0;j<9;j++){
	ctx.fillRect( 560 + x , 110 + y, 10, 10);
	ctx.stroke();
	x=x+15;
 }
 y=y+15;
 x=0;
}

ctx.rect(900, 100, 150, 150);
ctx.stroke();
 //var i;
 x=0;
 y=0;
 //var j;
for(i=0;i<9;i++){
	for(j=0;j<9;j++){
	ctx.fillRect( 910 + x , 110 + y, 10, 10);
	ctx.stroke();
	x=x+15;
 }
 y=y+15;
 x=0;
}

ctx.beginPath();
ctx.arc(110,180,50,0,2*Math.PI);
ctx.fillStyle="ivory";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokestyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(550,180,50,0,2*Math.PI);
ctx.fillStyle="ivory";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokestyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(970,180,50,0,2*Math.PI);
ctx.fillStyle="ivory";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokestyle="black";
ctx.stroke();

}