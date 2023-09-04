

function plotLine(xA, yA, xB, yB, val) {
    length = Math.round(dist(xA, yA, xB, yB))
    drawing = false
    for(let i = 0; i < length; i++) {
      perc = map(i, 0, length, 0, 1)
      checkPos = ptBetween(xA, yA, xB, yB, perc)
      col = c.get(checkPos.x, checkPos.y)[0]
      if(checkPos.x > marg && checkPos.x < w-marg && checkPos.y > marg && checkPos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
      if(col == val && drawing == false) {
        beginShape()
        vertex(checkPos.x, checkPos.y)
        drawing = true
      } else if(col == val && drawing == true) {
        vertex(checkPos.x, checkPos.y)
      } else if(col != val && drawing == true) {
        endShape()
        drawing = false
      } 
    }
    if(drawing == true) {
        endShape()
    }
}

function plotCirc(x, y, r, val) {
    drawing = false
    for(let i = 0; i < 365; i++) {
      
      xPos = cos(i)*r/2
      yPos = sin(i)*r/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
      
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i > 365) {
        endShape()
      }
    }
    if(drawing == true) {
        endShape()
    }
  
}
  
  
function plotOval(x, y, wid, hei, val) {
    drawing = false
    for(let i = 0; i < 365; i++) {
      xPos = cos(i)*wid/2
      yPos = sin(i)*hei/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == 365 && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
    
}
  
function plotDiamond(x, y, wid, hei, val) {
    drawing = false
    for(let i = 0; i < 365; i++) {
      squareMod = (min(1 / abs(cos(i)), 1 / abs(sin(i))))
  
      xPos = (cos(i+45)*wid/2)*squareMod
      yPos = (sin(i+45)*hei/2)*squareMod
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == 365 && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
    
}
  
function plotRect(x, y, wid, hei, val) {
    drawing = false
    
    for(let i = 0; i < (365); i++) {
      squareMod = (min(1 / abs(cos(i)), 1 / abs(sin(i))))
      xPos = (cos(i)*wid/2)*squareMod
      yPos = (sin(i)*hei/2)*squareMod
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == 365 && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
    
}
  
function plotRectFill(x, y, wid, hei, val) {
    drawing = false
    numSpirals = max([wid, hei])/(mmWt*1.5)
    for(let i = 5; i < (360*numSpirals)+5; i+=10) {
      squareMod = (min(1 / abs(cos(i)), 1 / abs(sin(i))))
      spiralMod = map(i, 0, 360*numSpirals, 0, 1)
      xPos = (cos(i)*wid/2)*squareMod*spiralMod
      yPos = (sin(i)*hei/2)*squareMod*spiralMod
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == (360*numSpirals)+5 && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      } 
    }
    if(drawing == true) {
        endShape()
    }
    
}

function plotSpiral(x, y, r, isolated, val) {
    drawing = false
    numSpirals = (r/2)/slinkyGap
    strokeWeight(mmWt*2)
    
    for(let i = 0; i < 360*numSpirals; i+=10) {
      rNow = map(i, 0, 360*numSpirals, r/2, 0)
      xPos = cos(i)*rNow/2
      yPos = sin(i)*rNow/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == Math.floor(360*numSpirals) && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
  
    if(isolated == true) {
      c.fill('gray')
      c.noStroke()
      c.circle(x, y, r+padding)
    }
    
}
  
function plotRing(x, y, r, isolated, val) {
    drawing = false
    portion = (r/2)/4
    numSpirals = (portion)/slinkyGap
    strokeWeight(mmWt*2)
    
    for(let i = 0; i < 360*numSpirals; i+=10) {
      rNow = map(i, 0, 360*numSpirals, r/2, (r/2)-portion)
      xPos = cos(i)*rNow/2
      yPos = sin(i)*rNow/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true && inBounds == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == Math.floor(360*numSpirals) && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
  
    if(isolated == true) {
      c.fill('gray')
      c.noStroke()
      c.circle(x, y, r+padding)
    }
    
}
  
function plotTriFill(x, y, r, isolated, val) {
    drawing = false
    numSpirals = (r/2)/slinkyGap
    strokeWeight(mmWt)
    angOff = (randomInt(0, 1)*180)
    
    for(let i = angOff; i < angOff+(360*numSpirals); i+=360/3) {
      rNow = map(i, 0, 360*numSpirals, 0, r)
      xPos = cos(i)*rNow/2
      yPos = sin(i)*rNow/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        beginShape()
        vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true && inBounds == true) {
        vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        endShape()
        drawing = false
      } else if(i == Math.floor(360*numSpirals) && drawing == true) {
        vertex(pos.x, pos.y)
        endShape()
        drawing = false
      }
    }
    if(drawing == true) {
        endShape()
    }
  
    if(isolated == true) {
      c.fill('gray')
      c.noStroke()
      c.circle(x, y, r+padding)
    }
    
}


  
  
function cPlotSpiral(x, y, r, val) {
    drawing = false
    numSpirals = (r/2)/slinkyGap
    strokeWeight(mmWt)
    
    for(let i = 0; i < 360*numSpirals; i+=5) {
      rNow = map(i, 0, 360*numSpirals, 0, r)
      xPos = cos(i)*rNow/2
      yPos = sin(i)*rNow/2
  
      pos = createVector(x+xPos, y+yPos)
      col = c.get(pos.x, pos.y)
      if(pos.x > marg && pos.x < w-marg && pos.y > marg && pos.y < h-marg) {
        inBounds = true
      } else {
        inBounds = false
      }
  
      if(col[0] == val && drawing == false && inBounds == true) {
        c.beginShape()
        c.vertex(pos.x, pos.y)
        drawing = true
      } else if(col[0] == val && drawing == true && inBounds == true) {
        c.vertex(pos.x, pos.y)
      } else if(col[0] != val && drawing == true) {
        c.endShape()
        drawing = false
      } else if(i == Math.floor(360*numSpirals) && drawing == true) {
        c.vertex(pos.x, pos.y)
        c.endShape()
        drawing = false
      }
    }
    
}