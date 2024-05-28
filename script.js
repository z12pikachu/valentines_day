document.getElementById('showDeclarationButton').addEventListener('click', showDeclaration);
document.getElementById('showVideoButton').addEventListener('click', showVideo);

function showDeclaration() {
    const declarationText = "Oi minha Princesa, queria te dizer que você é a mulher da minha vida, não tenho muitas palavras para expressar o que sinto, todavia saiba que o meu sentimento se resume em apenas uma: AMOR, o sentimento indescritivel de ficar bem apenas de te ver sorrir, de levantar todo dia pensando em nós, em ti... e encontrar forças para enfrentar tudo e todos pelo nosso futuro, saiba que independente de tudo que aconteça, você sempre me terá, seu zé, seu menino desatento, seu homem, seu parceiro. Eu ainda quero conquistar muitas coisas ao seu lado, e peço isso a Deus todos os dias, mas vejo que tenho muito mais a agradecer a ele, pois o mais importante eu ja tenho... VOCÊ, essa mulher carinhosa e ao mesmo tempo brava, essa mulher inteligente e esperta, essa mulher inspiradora, guerreira. Obrigado por compartilhar seu bem mais precioso comigo, sua VIDA, é um priviegio estar seguindo essa jornada ao seu lado, EU TE AMO EVELLYN.";
    const declarationElement = document.getElementById('declaration');
    const photoContainer = document.getElementById('photoContainer');
    const photo = document.getElementById('photo');
    const audio = document.querySelector('audio');
    photo.src = 'ft2.jpg';
    photoContainer.classList.remove('hidden');
    declarationElement.style.opacity = 0;
    setTimeout(() => {
        declarationElement.innerText = declarationText;
        declarationElement.style.transition = 'opacity 2s';
        declarationElement.style.opacity = 1;
    }, 100);

   

    if (audio) {
        audio.play();
    }

    createHeartsAndPhotos();
}

function createHeartsAndPhotos() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart();
            createFallingPhoto();
        }, i * 500);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    document.querySelector('.background').appendChild(heart);

    const animation = heart.animate([
        { top: '-20px', opacity: 1 },
        { top: '100vh', opacity: 0 }
    ], {
        duration: Math.random() * 10000 + 15000,
        easing: 'ease-out',
        iterations: 1,
        fill: 'forwards'
    });

    animation.onfinish = () => {
        heart.remove();
    };
}

function createFallingPhoto() {
    const photoURLs = [
        'ft1.jpg',
        'heart.jpg',
    ];
    const photoURL = photoURLs[Math.floor(Math.random() * photoURLs.length)];

    const photo = document.createElement('div');
    photo.classList.add('falling-photo');
    photo.style.backgroundImage = `url(${photoURL})`;
    photo.style.left = `${Math.random() * 100}%`;
    photo.style.width = '60px';
    photo.style.height = '60px';
    photo.style.animationDuration = `${Math.random() * 40 + 30}s`;
    document.querySelector('.background').appendChild(photo);

    setTimeout(() => {
        photo.remove();
    }, 5000);
}

function showVideo() {
	
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    videoContainer.style.display = 'block';
    videoPlayer.play();
	var form = document.getElementById('form');
	form.reset();
}

const canvas = document.getElementById('heartCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

function curve() {
    if (ctx) {
        for (let i = 0; i < 200; i++) {
            ctx.rotate(Math.PI / 200);
            ctx.lineTo(1, 1);
        }
    }
}
