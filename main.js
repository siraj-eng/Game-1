let playerState = "idle";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

//Creation of the canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//Player Image
const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

//creation of the game frame states
let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates= [
{
    name: 'idle',
    frames: 7,
},
{
    name: 'jump',
    frames: 7,
},
{
    name: 'fall',
    frames: 7,
},
{
    name: 'run',
    frames: 9,
},
{
    name: 'dizzy',
    frames: 11,
},
{
    name: 'sit',
    frames: 5,
},
{
    name: 'roll',
    frames: 5,
},
{
    name: 'bite',
    frames: 7,
},
{
    name: 'ko',
    frames: 12,
},
{
    name: 'getHit',
    frames: 4,
},
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j<state.frames; j++){
        let positionx = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionx, y: positionY});

    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

//function states
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length;
    let framex = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, framex, frameY,
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();