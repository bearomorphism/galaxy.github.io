var stars = [];
var speed;
var slider;
var sliderS;
var starAmount;
var sp;
var sa;

function setup() {
    createCanvas(1080, 720);
    starAmount = 500;
    for(var i = 0; i < starAmount; i++){
        stars[i] = new Star();
    }
    createP('');
    createElement('label','Speed: ');
    slider = createSlider(-50, 50, 2);
    sp = createElement('label', speed);
    createP('');
    createElement('label','Amount of Stars: ');
    sliderS = createSlider(0, 2000, 500);
    sa = createElement('label', starAmount);
    createP('');

}

function check(){
    if(stars.length > starAmount){
        stars.splice(starAmount, stars.length - starAmount);
    }else if(stars.length < starAmount){
        for(var i = stars.length; i < starAmount; i++){
            stars[i] = new Star();
        }
    }
}

function draw() {
    background(0);
    
    //text
    textSize(20);
    fill(255, 0, 0);
    noStroke();
    speed = slider.value();
    
    check();
    
    sp.html(speed);
    sa.html(starAmount);
    
    
    translate(width / 2, height / 2);

    for(var i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
    
    starAmount = sliderS.value();
    
}