let musicas = ['psy', 'enemy', 'crazy'];
let idMusica = 0;

function proxima() {
    let musica = document.getElementById(musicas[idMusica]);

    musica.pause();
    musica.classList.remove('play');
    musica.classList.add('pause');
    musica.currentTime = 0;

    if (idMusica == 2) {
        idMusica = 0;
    } else {
        ++idMusica;
    }

    tocar();
    console.log(idMusica);
}

function anterior() {
    let musica = document.getElementById(musicas[idMusica]);

    musica.pause();
    musica.classList.remove('play');
    musica.classList.add('pause');
    musica.currentTime = 0;

    if (idMusica == 0) {
        idMusica = 2;
    } else {
        --idMusica;
    }

    tocar();
    console.log(idMusica);
}

function tocar() {
    ///tocar
    let musica = document.getElementById(musicas[idMusica]);
    let classe = musica.getAttribute('class');

    let icone = document.getElementById('play');

    let nomeMusica = document.getElementById('nome-musica');
    nomeMusica.innerHTML = musicas[idMusica];

    if (classe == 'pause') {
        musica.play();
        musica.classList.remove('pause');
        musica.classList.add('play');

        icone.classList.remove('mdi-play-circle');
        icone.classList.add('mdi-pause-circle');
    } else {
        musica.pause();
        musica.classList.remove('play');
        musica.classList.add('pause');

        icone.classList.remove('mdi-pause-circle');
        icone.classList.add('mdi-play-circle');
    }
    
}

function resetar() {
    let musica = document.getElementById(musicas[idMusica]);

    musica.currentTime = 0;
}
