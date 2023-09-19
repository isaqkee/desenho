// Pega o ID Canvas do HTML
let canvas = document.getElementById("canvas");
// Pegamos o contexto do desenho, esse é o método que retorna um desenho, usar o parâmetro "2d" significa que o objeto que será renderizado será bidimensional
let contexto = canvas.getContext("2d");
// Variável que vamos usar para identificar se estamos desenhando
let desenhando = false;
// Variável para verificar se estamos usando a borracha
let usandoBorracha = false;
// Tamanho da borracha
let tamanhoBorracha = 30; // Altere este valor para ajustar o tamanho da borracha

// Adicione um evento de mudança para o input de cores
let corEscolhida = document.getElementById("corEscolhida");
corEscolhida.addEventListener("change", function(event) {
  contexto.strokeStyle = event.target.value;
});

contexto.lineWidth = 5;

canvas.addEventListener("mousedown", function(event) {
  if (usandoBorracha) {
    contexto.clearRect(
      event.clientX - contexto.canvas.offsetLeft - tamanhoBorracha / 2,
      event.clientY - contexto.canvas.offsetTop - tamanhoBorracha / 2,
      tamanhoBorracha,
      tamanhoBorracha
    );
  } else {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - contexto.canvas.offsetLeft, event.clientY - contexto.canvas.offsetTop);
  }
});

canvas.addEventListener("mousemove", function(event) {
  if (desenhando && !usandoBorracha) {
    contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    contexto.stroke();
  }
});

canvas.addEventListener("mouseup", function(event) {
  desenhando = false;
});

// Adicione um evento de clique ao botão de borracha
let btnBorracha = document.getElementById("btnBorracha");
btnBorracha.addEventListener("click", function() {
  usandoBorracha = !usandoBorracha;
  if (usandoBorracha) {
    btnBorracha.textContent = "Desenhar";
  } else {
    btnBorracha.textContent = "Borracha";
  }
});
