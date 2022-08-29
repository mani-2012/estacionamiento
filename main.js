//Create a reference for canvas 
Y=0;
X=0;
Andaluci=["parkingLot.jpg","estacion.jpg"];
car=Math.floor(Math.random()*2);
//Give specific height and width to the car image
andar=document.getElementById("myCanvas");
four=andar.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function hol() {
	phone=new Image();
	phone.onload=uploadBackground;
	phone.src=Andaluci[car];
	pulsera=new Image();
	pulsera.onload=uploadBackground;
	pulsera.src="car2.png";
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	four.drawImage(phone,0,0,andar.width,andar.height);
	four.drawImage(pulsera,X,Y,90,200)
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	console.log(keyPressed);
	keyPressed = e.keyCode;
	if(keyPressed == '38')
	{
		Y=Y-10;
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		Y=Y+10;
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		X=X-10;
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		X=X+10;
		right();
		console.log("right");
	}
}
function up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + car2_x + "  Y = "+car2_y);
		canvas.remove(car2_object);
		uploadBackground();
	}
}

function down()
{
	if(car2_y <=400)
	{
		car2_y = car2_y + 10;
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + car2_x + "  Y = "+car2_y);
		canvas.remove(car2_object);
	uploadBackground();
	}
}

function left()
{
	if(car2_x >0)
	{
		car2_x = car2_x - 10;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + car2_x + " Y = "+car2_y);
		canvas.remove(car2_object);
		uploadBackground();
	}
}

function right()
{
	if(car2_x <=800)
	{
		car2_x = car2_x + 10;
		console.log("Cuando se presiona la flecha derecha, X =  " + car2_x + " Y = "+car2_y);
		canvas.remove(car2_object);
		uploadBackground();
	}
}
