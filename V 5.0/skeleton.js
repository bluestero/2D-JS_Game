var charachter;
var charachterr;
var obstacles= [];
var obstacles2= [];
var obstacles3= [];
var obstacles4= [];
var ship;
var ship2;
var scorecount= 0;
alert("Rule's Simple AF. Just Try Not To Collide With Any Of The Obstacles \n\n Good Luck!");
var player = prompt("Enter No. Of Players (1 / 2)");
if (player === "2"){
var player1= prompt("Enter Player 1 Name");
var player2= prompt("Enter Player 2 Name");
alert("Orange = "+ player1 +"\nBlue = " + player2 + "\n\nOrange - WASD \n\nBlue - Arrow Keys.");	
}
else {
var playercolor = prompt("Enter Custom Color? (Default : Blue) \n\n (Y/N)");
if(playercolor === "Y"){
	var a = prompt("Enter R");
	var b = prompt("Enter G");
	var c = prompt("Enter B");
}
var difficulty = 1;
alert("Use Arrow Keys To Move.");
}




function setup(){
	createCanvas(750,600);
	frameRate(60);
	ship= new charachter();
	ship2= new charachterr();
	
	
	for(var i=0;i<6;i++){
		obstacles2[i]= new obstacle((i*100)+100,20);//gap between the obstacles, starting position 
	}
	for(var i=0;i<6;i++){
		obstacles[i]= new obstacle((i*100)+0,80);//gap between the obstacles, starting position 
	}for(var i=0;i<6;i++){
		obstacles4[i]= new obstacle2((i*100)+100,20);//gap between the obstacles, starting position 
	}
	for(var i=0;i<6;i++){
		obstacles3[i]= new obstacle2((i*100)+0,80);//gap between the obstacles, starting position 
	}	
}
function draw(){

	 fill(212);
	 background(23);
	 var edge= false;
	 var edge2= false;
	 var edge3=false;
	 var edge4=false;
	 var edge5=false;
	 var edge6=false;
	 var edge7=false;
	 var edge8=false;
	 var edge9=false;
	 var edge10=false;
	 var edge11=false;
	 var edge12=false;
	 var edge13=false;
	 var edge14=false;
	 var edge15=false;
	 var edge16=false;
	 
	if(player === "1"){
	ship2.show();
	ship2.move();
	if(playercolor === "Y"){
		ship2.color();
	}
	if(playercolor === "N"){
		ship2.color2();
	}
	if(difficulty === "1"){
		for(var i=0;i<obstacles2.length;i++){
			obstacles3[i].speedup1();
			obstacles4[i].speedup1();
			break
		}
	}

		 for(var i=0;i<obstacles2.length;i++){
		obstacles3[i].show();
		obstacles3[i].move();
		obstacles4[i].show();
		obstacles4[i].move();
		

		
		if (obstacles3[i].x>width || obstacles3[i].x<0){
			edge3=true;
		}
		else if (obstacles4[i].x>width || obstacles4[i].x<0){
			edge4=true;
		}
			if(obstacles3[i].y<0){
		edge14=true;
			}
			if(obstacles4[i].y<0){
		edge15=true;
			}



		if (obstacles3[i].hits4(ship2) || obstacles4[i].hits4(ship2)){
			//console.log(player1+ "Wins!");
			alert("Game Over! \n\nTotal Score "+Math.round(Number(scorecount)));
			//noCanvas();
			noLoop();
		}
		else{
			scorecount+=(0.00000005/600000);
			fill(255);
			textSize(20);
			text("Score: "+Math.round(Number(scorecount)),(width-90),15);
		}

	
	}

	for(var i=0;i<obstacles.length;i++){
		obstacles[i].show();
		obstacles[i].move();
		obstacles2[i].show();
		obstacles2[i].move();
		if (obstacles[i].x>width || obstacles[i].x<0){
			edge=true;
		}
		else if (obstacles2[i].x>width || obstacles2[i].x<0){
			edge2=true;
		}
			if(obstacles[i].y>height){
		edge13=true;
		}
			if(obstacles2[i].y>height){
		edge16=true;
			}

		if (obstacles[i].hits2(ship2) || obstacles2[i].hits2(ship2)){
			//console.log(player1+ "Wins!");
			alert("Game Over! \n\nTotal Score "+Math.round(Number(scorecount)));
			//noCanvas();
			noLoop();
		}
		
		else{
			scorecount+=((1/60)/obstacles.length);
			fill(255);
			textSize(20);
			text("Score: "+Math.round(Number(scorecount)),(width-90),15);
		}

	}
	}
	else if(player === "2"){
	ship.show();
	ship.move();
	ship2.show();
	ship2.move();
	ship.color4();
	ship2.color2();
	
		
	 for(var i=0;i<obstacles2.length;i++){
		obstacles3[i].show();
		obstacles3[i].move();
		obstacles4[i].show();
		obstacles4[i].move();	
		


		
		if (obstacles3[i].x>width || obstacles3[i].x<0){
			edge3=true;
		}
		else if (obstacles4[i].x>width || obstacles4[i].x<0){
			edge4=true;
		}
			if(obstacles3[i].y<0){
		edge14=true;
			}
			if(obstacles4[i].y<0){
		edge15=true;
			}

		if (obstacles3[i].hits3(ship) || obstacles4[i].hits3(ship)){
			//console.log(player2+ "Wins!");
			alert(player2 + " Wins! \nMatch Duration "+Math.round(Number(scorecount))+ " Seconds");
			//noCanvas();
			noLoop();
		}
		else{
			scorecount+=(1/1200);
			fill(255);
			textSize(20);
			text("Time: "+Math.round(Number(scorecount)),(width-90),15);
		}
		if (obstacles3[i].hits4(ship2) || obstacles4[i].hits4(ship2)){
			//console.log(player1+ "Wins!");
			alert(player1 + " Wins! \nMatch Duration "+Math.round(Number(scorecount))+ " Seconds");
			//noCanvas();
			noLoop();
		}
		else{
			scorecount+=(1/1200);
			fill(255);
			textSize(20);
			text("Time: "+Math.round(Number(scorecount)),(width-90),15);
		}

	
	}

	for(var i=0;i<obstacles.length;i++){
		obstacles[i].show();
		obstacles[i].move();
		obstacles2[i].show();
		obstacles2[i].move();
		
		if (obstacles[i].x>width || obstacles[i].x<0){
			edge=true;
		}
		else if (obstacles2[i].x>width || obstacles2[i].x<0){
			edge2=true;
		}
			if(obstacles[i].y>height){
		edge13=true;
		}
			if(obstacles2[i].y>height){
		edge16=true;
			}


		if (obstacles[i].hits(ship) || obstacles2[i].hits(ship)){
			//console.log(player2+ "Wins!");
			alert(player2 + " Wins! \nMatch Duration "+Math.round(Number(scorecount))+ " Seconds");
			//noCanvas();
			noLoop();
		}
		else{
			scorecount+=((1/1200)/obstacles.length);
			fill(255);
			textSize(20);
			text("Time: "+Math.round(Number(scorecount)),(width-90),15);
		}
		if (obstacles[i].hits2(ship2) || obstacles2[i].hits2(ship2)){
			//console.log(player1+ "Wins!");
			alert(player1 + " Wins! \nMatch Duration "+Math.round(Number(scorecount))+ " Seconds");
			//noCanvas();
			noLoop();
		}
		
		else{
			scorecount+=((1/1200)/obstacles.length);
			fill(255);
			textSize(20);
			text("Time: "+Math.round(Number(scorecount)),(width-90),15);
		}

	}
}




	
	if(ship.x>width ){
	edge5 = true;
	}
	if(ship.x<0){
	edge6 =true;
	}
		
	if(ship2.x>width){
	edge7 = true;
	}
	if(ship2.x<0){
		edge8=true;
	}
	if(ship.y>height ){
	edge9 = true;
	}
	if(ship.y<0){
	edge10 =true;
	}
		
	if(ship2.y>height){
	edge11 = true;
	}
	if(ship2.y<0){
		edge12=true;
	}


	if (edge){
		for(var i=0;i<obstacles.length;i++){
			obstacles[i].shiftDown();
		}
	}
	if (edge2){
		for(var i=0;i<obstacles.length;i++){
			obstacles2[i].shiftDown();
	}
	}
	if (edge3){
		for(var i=0;i<obstacles2.length;i++){
			obstacles3[i].shiftUp();
		}
		}
	if (edge4){
		for(var i=0;i<obstacles2.length;i++){
			obstacles4[i].shiftUp();
		}
	}
	if (edge5){
		ship.x=0;
	}
	if (edge6){
		ship.x=width;
	}
	if(edge7){
		ship2.x=0;
	}
	if(edge8){
		ship2.x=width;
	}
	if(edge9){
		ship.y=0;
	}
	if(edge10){
		ship.y=height;
	}
	if(edge11){
	ship2.y=0;
	}
	if(edge12){
	ship2.y=height;	
	}
	if(edge13){
	for(var i=0;i<obstacles.length;i++){
		obstacles[i].y=0;
	}
	}
	if(edge14){
		for(var i=0;i<obstacles2.length;i++){
			obstacles3[i].y=height;
		}
	}
	if(edge15){
		for(var i=0;i<obstacles2.length;i++){
			obstacles4[i].y=height;
		}
	}
	if(edge16){
	for(var i=0;i<obstacles.length;i++){
		obstacles2[i].y=0;
	}

	}
	
}

function keyReleased(){
	if (key == 'D' || key == 'A' ){
		ship.setDirx(0);
	}
	if (key == 'W' || key == 'S' ){
		ship.setDiry(0);
	}
	if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW ){
		ship2.setDirx(0);
	}
	if (keyCode == UP_ARROW || keyCode == DOWN_ARROW ){
		ship2.setDiry(0);
	}
	
}
function keyPressed(){
	if(key == 'D')
	{
		ship.setDirx(1);
		//ship.move(1);
	} else if(key == 'A')
	{
		ship.setDirx(-1);
		//ship.move(-1);
	}
	if(key == 'W')
	{
		ship.setDiry(-1);
		//ship.move(1);
	} else if(key == 'S')
	{
		ship.setDiry(1);
		//ship.move(-1);
	}
	if(keyCode == RIGHT_ARROW)
	{
		ship2.setDirx(1);
		//ship2.move(1);
	} else if(keyCode == LEFT_ARROW)
	{
		ship2.setDirx(-1);
		//ship2.move(-1);
	}
	if(keyCode == UP_ARROW)
	{
		ship2.setDiry(-1);
		//ship2.move(1);
	} else if(keyCode == DOWN_ARROW)
	{
		ship2.setDiry(1);
		//ship2.move(-1);
	}
	}
