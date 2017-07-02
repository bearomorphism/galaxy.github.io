function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.c = color(random(50, 255), random(50, 255), random(50, 255));
    this.pz = this.z;
    
    this.update = function() {
        this.z -= speed;
        if(this.z < 1){
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
            this.c = color(random(50, 255), random(50, 255), random(50, 255));
            
        }else if(this.z > width){
            this.z = 1;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
            this.c = color(random(50, 255), random(50, 255), random(50, 255));
            
        }
    }
    
    this.show = function() {
        noStroke();
        fill(this.c);
        
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        
        var r = map(this.z, 0, width, 20, 0);
        
        ellipse(sx, sy, r, r);
        
        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);
        
        this.pz = this.z;
        
        stroke(this.c);
        line(sx, sy, px, py);
        

    }
}