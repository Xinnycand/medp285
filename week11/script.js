function setup() {
    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
    strokeWeight(4);
    noFill();
    stroke(72, 28, 94);
    describe(
      'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
    );
  }
  
  function draw() {
    background(150, 160, 200);
  
    // Call every frame to adjust camera based on mouse/touch
    orbitControl();
  
    // Rotate rings in a half circle to create a sphere of cubes
    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
      // Rotate cubes in a full circle to create a ring of cubes
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        push();
  
        // Rotate from center of sphere
        rotateZ(zAngle);
        rotateX(xAngle);
  
        // Then translate down 400 units
        translate(300, 700, 100);
        box(150);
        pop(800);
        
      fill(155, 0, 0, 175);
      noStroke();
      }
    }
  }


