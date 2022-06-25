function setup() {
    createCanvas(1280, 720, WEBGL);
}

function draw() {
    let fov = -105;
    let cameraZ = (height/2.0) / tan(fov/2.0);
    perspective(fov, float(width)/float(height),
        cameraZ/10.0, cameraZ*10.0);
    box(180);
}