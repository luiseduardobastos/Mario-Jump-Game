const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const play = document.querySelector('.play');
const audio = document.querySelector('.audio');
const lose = document.querySelector('.lose');
const music = document.querySelector('.music');
const info_iniciais = document.querySelector('.info-iniciais');

var cont = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

function iniciar() {
    document.getElementById('btn-iniciar').style.display = "none";
    document.getElementById('text-pontuacao').style.display = "block";
    
    pipe.classList.add('play');
    clouds.classList.add('play-clouds');
    info_iniciais.style.display = "none";

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = clouds.offsetLeft;
    
        /*console.log(loop);*/

        cont++;
        document.getElementById('points').innerHTML = cont;

        music.play();

        /*console.log(cont);*/

        if (pipePosition > 1180 && marioPosition > 80) {
            audio.play();
        }
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 85){

            lose.play();

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`; 
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './assets/game_over.png';
            mario.style.width = '120px';
            mario.style.marginLeft = '20px';
    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`; 
    
            pipe.classList.remove('play');
            document.getElementById('btn-recomecar').style.display = "block";

            music.pause();
    
            clearInterval(loop);
        }
    }, 10)
}

function recomecar() {
    document.getElementById('btn-iniciar').style.display = "block";
    document.getElementById('text-pontuacao').style.display = "none";

    window.location.reload();
}

document.addEventListener('keydown', jump);

document.querySelector('#btn-iniciar').addEventListener("click", iniciar);

document.querySelector('#btn-recomecar').addEventListener("click", recomecar);