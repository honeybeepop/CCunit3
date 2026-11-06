//sketch is your main.lua file
//commenting is w 2 forward slashes!

//10+ colors
  // 5
//1 animation that moves something across the screen and loops
  //clouds
//1 figure/element that follows the mouse made of at least 3 shapes
  //carrot


//runnybabbit :3

function setup() {
  createCanvas(600, 600);
    rectMode(CENTER)
    angleMode(DEGREES)
}

function draw() {
  background(195, 215, 230);
  
  //tummy and darkest part
push()
  noStroke()
  rotate()
  fill(77, 64, 57)
  rect(292,425,100,250)
pop()
push()
translate(310,430)
rotate(12)
rectMode(CENTER)
fill(77,64,57)
noStroke()
rect(0,0,100,213)
pop()
push()
translate(334,515)
fill(77,64,57)
noStroke()
rect(0,0,70,70)
pop()

//neck
push()
rectMode(CENTER)
rotate(65)
  noStroke()
  fill(148, 125, 112)
  rect(385,-150,145,150)
pop()

//back
push()
noStroke()
rotate(2)
fill(148,125,112)
rect(223,350,100,175)
pop()

//mid shading
push()
  rotate(65)
  noStroke()
  fill(107, 90, 80)
  rect(400,-100,175,130)
pop()

//tail
noStroke()
fill(230, 219, 213)
triangle(200,530,140,530,120,430)

//back foot
push()
noStroke()
fill(148,125,112)
triangle(225,550,225,500,375,550)
pop()

//hip
push()
stroke(54, 45, 40, 180)
strokeWeight(4)
fill(148,125,112)
ellipse(230,450,160,200)
pop()

//lower shoulder
push()
translate(320,320)
rotate(15)
noStroke()
fill(148,125,112)
triangle(-40,10,25,120,72,-6)
pop()

//leg
push()
translate(325,425)
rectMode(CENTER)
rotate(75)
noStroke()
fill(148,125,112)
rect(0,0, 80,35)
pop()
push()
translate(360,475)
rectMode(CENTER)
rotate(35)
noStroke()
fill(148,125,112)
rect(0,0, 80,35)
pop()

//front foot
push()
translate(370,470)
rotate(10)
noStroke()
fill(148,125,112)
triangle(0,0,10,70,45,0)
pop()

//top shoulder
push()
noStroke()
translate(344,238)
rectMode(CENTER)
rotate(45)
fill(148,125,112)
rect(0,0,80,60)
pop()

push()
noStroke()
translate(367,289)
rectMode(CENTER)
rotate(2)
fill(148,125,112)
rect(0,0,50,90)
pop()

push()
noStroke()
rotate(2)
fill(195,215,230)
rect(412,300,20,20)
pop()

}