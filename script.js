'use strict'

const sons = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'
}

/**criar uma div */
const criarDiv = (texto ) => {
  const div = document.createElement('div')
  div.classList.add('key')
  div.textContent = texto
  div.id = texto
  document.getElementById('container').appendChild(div)
}


/**vai exibir a div na tela, pegando os elementos do json(sons) */
const exibir = (sons) => {
  Object.keys(sons).forEach(criarDiv)
}


/**vai pega o audio */
const tocarSom = (letra) => {
  const audio = new Audio(`./sounds/${sons[letra]}`) 

  audio.play();
}

/**aqui vai adcicionar um efeito da div que for clicado */
const adicianrEfeito = (letra) => {
  document.getElementById(letra).classList.add('active')
}

/**aqui vai remove um efeito da div que for clicado */
const removeEfeito = (letra) => {
 const div = document.getElementById(letra);
 const removeActive = () => div.classList.remove('active')
 div.addEventListener('transitionend', removeActive)//vai espera o efeito acabar par pode ser removido
}


const ativaDiv = (evento) => {
  let letra = ''
  if (evento.type == 'click') {
     letra = evento.target.id;
  } else  {
     letra = evento.key.toUpperCase()
  }
  const letraPermitida = sons.hasOwnProperty(letra)
  if(letraPermitida) {
    adicianrEfeito(letra)
    tocarSom(letra)
    removeEfeito(letra)
  }
}


exibir(sons)
document.getElementById('container').addEventListener('click', ativaDiv);


window.addEventListener('keydown', ativaDiv)



















