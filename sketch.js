pageHeight = 8
pageWidth = 6
ratio = pageHeight/pageWidth //ratio is height/width of page to print on
w= 1600
h = w*ratio
marg = w*randomVal(0.05, 0.2)
wt = (0.01377953/pageHeight)*h

plotPal = ['#e95353', '#1d90fb', 'black']

//parameters


function setup() {
  createCanvas(w, h, SVG);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(bgc)

  //Sketch

  
}
