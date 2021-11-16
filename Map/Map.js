const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
//Set Canvas to have the same dimensions as the Mini Map
const map = document.getElementById("map");
canvas.width = map.width;
canvas.height = map.height;
//Split the canvas into columns and rows. canvas will have 1000 of each.
const canvasCol = canvas.width / 1000;
const canvasRow = canvas.height / 1000;

//Animate Function will be called on document load
(function animate(){
    //Recursive function (fancy while loop) that repeats itself to run at 60FPS.
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.length);
})();