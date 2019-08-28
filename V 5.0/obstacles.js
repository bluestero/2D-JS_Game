function obstacle(x,y){
	this.x=x;
	this.y=y;
	this.r=10;
	this.xdir=1.5;
	this.ydir=1.5;
	this.show=function(){
		//noStroke();
		fill(150,10,255);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
	this.speedup3=function(){
		this.xdir=this.xdir+1;
		this.ydir=this.ydir+1;
	}
	this.speedup4=function(){
		this.xdir=this.xdir+2;
		this.ydir=this.ydor+2;
	}
	this.move=function(){
		this.x=this.x+this.xdir;
		this.y=this.y+this.ydir;
	}
	this.shiftDown=function(){
		this.xdir=this.xdir*(-1);
		this.y=this.y;
	}
	this.hits=function(charachter){
		var d=dist(this.x,this.y,charachter.x,charachter.y);
		if (d < (this.r)+(charachter.r-2)){
			return true;
		}
		else{
			return false;
		}
		
	}
		this.hits2=function(charachterr){
		var d2=dist(this.x,this.y,charachterr.x,charachterr.y);
		if (d2 < (this.r)+(charachterr.r-2)){
			return true;
		}
		else{
			return false;
		}
		
	}
	
}