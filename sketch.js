//Changing size with url params
url = new URL(window.location.href)
urlParams = new URLSearchParams(url.search)
//to change size of the pen, press 'w' and edit the penSize variable in url, in mm in tenths '35' for 0.35
if(url.searchParams.has('penSize') == true) {
  penSize = (url.searchParams.get('penSize'))/100
} else {
  penSize = 0.35
}
//changing render type
if(url.searchParams.has('renderType') == true) {
  renderMode = url.searchParams.get('renderType')
} else {
  renderMode = 1
}

if(url.searchParams.has('renderType') == true) {
  renderType = url.searchParams.get('penSize')
} else {
  renderType = 1
}

plotPal = [
  scarlet,
  rowneyBlue,
  black
]

pageWidth = 11
pageHeight = 15
ratio = pageHeight/pageWidth //ratio is height/width of page to print on
w= 1600
h = w*ratio
marg = (inchToPx(1))

mmSize = 0.8
mmToInch = mmSize/25.4
mmWt = (mmToInch/pageHeight)*h

//parameters


function setup() {
  pixelDensity(1)
  if(renderMode == 2) {
    createCanvas(w, h, SVG);
    console.log('svg runtime')
  } else {
    createCanvas(w, h);
    console.log('standard runtime')
  }
  
  saveCanv = createGraphics(w, h)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(250)
  noFill()

  //Sketch
  setPen(rowneyBlue)
 

}
