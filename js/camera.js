const botaoInicarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviar = document.querySelector('[data-enviar]');

botaoInicarCamera.addEventListener('click', async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoInicarCamera.style.display = 'none';
    campoCamera.style.display = 'block';
    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.Width, canvas.Height);
    ImagemURL = canvas.toDataURL('image/png');
    campoCamera.style.display = 'none';
    mensagem.style.display = 'block';
});

botaoTirarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem('cadastro');
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;
    
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = './abrir-conta-form-3.html';
});