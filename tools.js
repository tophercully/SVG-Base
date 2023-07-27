function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomVal(min, max) {
  return fxrand() * (max - min) + min;
}
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function shuff(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(fxrand() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function keyTyped() {
  if (key === "s" || key === "S") {
    save(pageWidth+'x'+pageHeight+fxhash);
  }
  if (key === "1") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "size", "1"));
    window.location.reload();
  }
  if (key === "2") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "size", "2"));
    window.location.reload();
  }
  if (key === "3") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "size", "3"));
    window.location.reload();
  }
  if (key === "v" || key === "V") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "renderType", "2"));
    window.location.reload();
  }
  if (key === "p" || key === "P") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "renderType", "1"));
    window.location.reload();
  }
  if (key === "w" || key === "W") {
    window.history.replaceState('', '', updateURLParameter(window.location.href, "penSize", "35"));
    window.location.reload();
  }
}
function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

function reOrder() {
  //find all paths

  mainSVG = document.getElementsByTagName('svg')
  paths = document.getElementsByTagName('path')

  onlyG = document.getElementsByTagName("g")
  //find folder paths are currently under
  pathsFolder = paths[0].parentElement
  folder = onlyG[0].parentElement
  folder.setAttribute('xlmns', 'inkscape', '')
  
  folder.setAttribute('xlmns:inkscape', 'https://inkscape.org/namespaces/inkscape/')
  layers = []
  
  //check against first color
  for(let j = 0; j < plotPal.length; j++) {
    layers[j] = document.createElement('g')
    layers[j].setAttribute('id', 'layer'+(j+1))
    // layers[j].setAttribute('inkScape', 'groupmode')
    layers[j].setAttribute('inkscape:groupmode', 'layer')
    layers[j].setAttribute('inkscape:label', plotPal[j].svgName)
    // console.log(layers[j])
    console.log(paths.length)
    //call and format color for comparison
    palCol = color(plotPal[j].hex)
    palColFormatted = "rgb("+palCol.levels[0]+','+palCol.levels[1]+','+palCol.levels[2]+')'
    
    //check against each path
    for(let i = 0; i < paths.length; i++) {
      //read path color
      col = paths[i].getAttribute("stroke")//Path color
      
      console.log(col, 'sample')
      console.log(palColFormatted, 'target')
      //sort colors into respective groups
      if(col == palColFormatted) {
        console.log('sorting')
        layers[j].append(paths[i])
        
        
      }
      
    }
    
  }

  for(let i = 0; i < layers.length; i++) {
    folder.append(layers[i])
    console.log(folder)
  }
  
  
}

function randColor() {
  return chroma(truePal[randomInt(0, truePal.length-1)]).saturate(0).hex()
}

function angBetween(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

function diff (num1, num2) {
  if (num1 > num2) {
    return (num1 - num2);
  } else {
    return (num2 - num1);
  }
};

function distBetween (x1, y1, x2, y2) {
  var deltaX = diff(x1, x2);
  var deltaY = diff(y1, y2);
  var distan = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  return (distan);
};

function ptFromAng(xPosition, yPosition, ang, dis) {
  xMod = cos(ang)*dis
  yMod = sin(ang)*dis

  return createVector((xPosition+xMod), (yPosition+yMod))
}

function plusOrMin(x) {
  chance = fxrand() 
  if(chance < 0.5) {
    mod = 1
  } else {
    mod = -1
  }

  return x*mod
}

function average(array) {
  sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / array.length;
}

function ptBetween(xA, yA, xB, yB, amt) {
  xBetween = map(amt, 0, 1, xA, xB)
  yBetween = map(amt, 0, 1, yA, yB)
  betweenPos = createVector(xBetween, yBetween)
  return betweenPos
}

function inchToPx(meas) {
  return (meas/pageHeight)*h
}

function pxToInch(meas) {
  return (meas/h)*pageHeight
}

function mmToInch(mm) {
  return mm/25.4
}

function mmToPx(mm) {
  toInch = mm/25.4
  toPx = (toInch/pageHeight)*h
  return toPx
}

function setStrokeMM(mm) {
  weightNow = mmToPx(mm) 
  strokeWeight(weightNow)
}

function setPen(pen) {
  stroke(pen.hex)
  mmWt = mmToPx(pen.sz)
  strokeWeight(mmWt)
}
////////////////////////////////////////

function dashLine(xA, yA, xB, yB, phase) {
  here = createVector(xA, yA)
  there = createVector(xB, yB)
  length = distBetween(here.x, here.y, there.x, there.y)
  ns = randomVal(0.05, 0.005)
  drawing = false
  for(let i = 0; i < length; i++) {
    n = noise(i*ns, phase)
    if(n > 0.5 && drawing == false) {
      xNow = map(i, 0, length, here.x, there.x)
      yNow = map(i, 0, length, here.y, there.y)
      drawing = true 
      // vertA = createVector(xNow, yNow)
      beginShape()
      vertex(xNow, yNow)
    } else if(n < 0.75 && drawing == true) {
      xNow = map(i, 0, length, here.x, there.x)
      yNow = map(i, 0, length, here.y, there.y)
      drawing = false 
      // beginShape()
      // vertex(vertA.x, vertA.y)
      vertex(xNow, yNow)
      endShape()
    }

    if(i == length) {
      endShape()
    }
  }
}

function wiggleLine(xA, yA, xB, yB, weight) {
  noFill()
  strokeWeight(mmWt)
  startAng = 180//randomVal(0, 360)
  here = createVector(xA, yA)
  there = createVector(xB, yB)
  length = distBetween(here.x, here.y, there.x, there.y)
  ang = angBetween(here.x, here.y, there.x, there.y)
  freq = length/2
  beginShape()
  for(let i = 0; i < length; i++) {
    iNormal = map(i, 0, length, 0, 360)
    off = map(cos(iNormal*freq), -1, 1, -weight/2, weight/2)
    xNow = map(i, 0, length, here.x, there.x)
    yNow = map(i, 0, length, here.y, there.y)
    now = ptFromAng(xNow, yNow, ang+90, off)
    vertex(now.x, now.y)
  }
  endShape()
}

function dashWiggleLine(xA, yA, xB, yB, weight) {
  noFill()
  strokeWeight(mmWt)
  startAng = randomVal(0, 360)
  here = createVector(xA, yA)
  there = createVector(xB, yB)
  length = distBetween(here.x, here.y, there.x, there.y)
  ang = angBetween(here.x, here.y, there.x, there.y)
  
  freq = length/2
  dashFreq = randomVal(2, 40)
  // beginShape()
  inc = length/(dashFreq/2)
  drawing = false
  numCounter = 0
  for(let i = 0; i < length; i+=mmWt/2) {
    numCounter++
    iNormal = map(i, 0, length, 0, 360)
    n = sin(iNormal*dashFreq)//noise(i*ns, phase)
    
    if(n < 0.0 && drawing == false) {
      drawing = true 
      beginShape()
    } else if(n < 0.0) {
      
      if(numCounter%2 == 0) {
        off = weight/2
      } else {
        off = -weight/2
      }
      // off = weight/2//map(cos(iNormal*freq), -1, 1, -weight/2, weight/2)
      xNow = map(i, 0, length, here.x, there.x)
      yNow = map(i, 0, length, here.y, there.y)
      now = ptFromAng(xNow, yNow, ang+90, off)
      vertex(now.x, now.y)
      
    } else if( n > 0.0 && drawing == true) {
      endShape()
      drawing = false
    }
    
  }
  // endShape()
}

function compoundDash(xA, yA, xB, yB, weight, num) {
  ang = angBetween(xA, yA, xB, yB)
  for(let i = 0; i < num; i++) {
    thisWt = map(i, 0, num, weight, weight/num)
    offMax = (weight-thisWt)/2
    off = ptFromAng(0, 0, ang+90, randomVal(offMax, -offMax))
    dashWiggleLine(xA+off.x, yA+off.y, xB+off.x, yB+off.y, thisWt)
  }
}

function noiseGrid(cols, phase) {
  // cols = randomInt(5, 50)
  rows = Math.round(cols*ratio)
  cellW = (w-(marg*2))/cols
  cellH = (h-(marg*2))/rows
  padding = min([cellW, cellH])*0.2
  ns = 4

  for(let y = 0; y < rows; y++) {
    for(let x = 0; x < cols; x++) {
      xNormal = map(x, 0, cols, 0, 1)
      yNormal = map(y, 0, rows, 0, 1)
      n = noise(xNormal*ns, yNormal*ns, phase)
      if(n > 0.5) {
        circle(marg+x*cellW+cellW/2, marg+y*cellH+cellH/2, min([cellW, cellH])-padding)
      }
    }
  }
}