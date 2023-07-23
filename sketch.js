pageWidth = 6
pageHeight = 8
ratio = pageHeight/pageWidth //ratio is height/width of page to print on
w= 1600
h = w*ratio
marg = (inchToPx(1))

mmSize = 0.35
mmToInch = mmSize/25.4
mmWt = (mmToInch/pageHeight)*h

plotPal = [
  '#d64926', //scarlett
  '#2368c2', //rowney blue
  '#144722', //sap green
  '#60c365', //emerald
  '#FEEB23', //fprocess yellow
  'black'
]

//parameters


function setup() {
  createCanvas(w, h, SVG);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(bgc)
  strokeWeight(mmWt)

  //Sketch

  
}
