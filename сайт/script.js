const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const size = 20;
const tiles = 20;

let snake = [
    {x:10,y:10}
];

let dx = 1;
let dy = 0;

let score = 0;

let apple = {
    x:Math.floor(Math.random()*tiles),
    y:Math.floor(Math.random()*tiles)
};

document.addEventListener("keydown",function(e){

    if(e.key=="ArrowUp" && dy==0){
        dx=0;
        dy=-1;
    }

    if(e.key=="ArrowDown" && dy==0){
        dx=0;
        dy=1;
    }

    if(e.key=="ArrowLeft" && dx==0){
        dx=-1;
        dy=0;
    }

    if(e.key=="ArrowRight" && dx==0){
        dx=1;
        dy=0;
    }

});

function draw(){

    let head={
        x:snake[0].x+dx,
        y:snake[0].y+dy
    };

    if(head.x<0) head.x=tiles-1;
    if(head.x>=tiles) head.x=0;
    if(head.y<0) head.y=tiles-1;
    if(head.y>=tiles) head.y=0;

    for(let part of snake){

        if(part.x==head.x && part.y==head.y){

            alert("Гру закінчено!\nОчки: "+score);

            snake=[{x:10,y:10}];

            dx=1;
            dy=0;

            score=0;

            document.getElementById("score").innerHTML=0;

            apple={
                x:Math.floor(Math.random()*tiles),
                y:Math.floor(Math.random()*tiles)
            };

            return;
        }

    }

    snake.unshift(head);

    if(head.x==apple.x && head.y==apple.y){

        score++;

        document.getElementById("score").innerHTML=score;

        apple={
            x:Math.floor(Math.random()*tiles),
            y:Math.floor(Math.random()*tiles)
        };

    }else{

        snake.pop();

    }

    ctx.fillStyle="#111";
    ctx.fillRect(0,0,400,400);

    ctx.fillStyle="red";
    ctx.fillRect(
        apple.x*size,
        apple.y*size,
        size,
        size
    );

    ctx.fillStyle="lime";

    for(let part of snake){

        ctx.fillRect(
            part.x*size,
            part.y*size,
            size-2,
            size-2
        );

    }

}

setInterval(draw,167);