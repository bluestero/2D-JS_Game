function obstacle2(x,y){
	this.x=x;
	this.y=y+520;
	this.r=10;
	this.xdir=-1.5;
	this.ydir=-1.5;
	this.show=function(){
		//noStroke();
		fill(255,10,150);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
	this.speedup1=function(){
		this.xdir=this.xdir-.5;
		this.ydir=this.ydir-.5;
	}
		this.speedup2=function(){
		this.xdir=this.xdir-2;
		this.ydir=this.ydir-2;
	}
	this.move=function(){
		this.x=this.x+this.xdir;
		this.y=this.y+this.ydir;
	}
	this.shiftUp=function(){
		this.xdir=this.xdir*(-1);
		this.y=this.y;
	}
	this.hits3=function(charachter){
		var d3=dist(this.x,this.y,charachter.x,charachter.y);
		if (d3 < (this.r)+(charachter.r-2)){
			return true;
		}
		else{
			return false;
		}
		
	}
		this.hits4=function(charachterr){
		var d4=dist(this.x,this.y,charachterr.x,charachterr.y);
		if (d4 < (this.r)+(charachterr.r-2)){
			return true;
		}
		else{
			return false;
		}
		
	}
	
}