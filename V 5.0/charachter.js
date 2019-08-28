function charachter(){
	this.x=width/2;
	this.y=height/2;
	this.r=8;
	this.xdir=0;
	this.ydir=0;
	this.show=function(){
		//noStroke();
		}
		this.color3=function(){
		fill(a,b,c);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
		this.color4=function(){
		fill(255,125,0);
		ellipse(this.x,this.y,this.r*2,this.r*2);
		}
	this.setDirx=function(dir){
		this.xdir=dir;
	}
	this.setDiry=function(dir){
		this.ydir=dir;
	}
	this.move=function(dir){
		this.x += (this.xdir * 3);
		this.y += (this.ydir * 3)
	}
	
}