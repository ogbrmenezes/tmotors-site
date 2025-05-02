const imagens = [
  "imagens/tcros/tcrosnova.jpeg",
  "imagens/tcros/tcros2.jpeg",
  "imagens/tcros/tcros3.jpeg",
  "imagens/tcros/tcros4.jpeg"
];

let imagemAtual = 0;

function exibirImagem(index) {
  const imgPrincipal = document.getElementById("img-principal");
  if (imagens[index]) {
    imagemAtual = index;
    imgPrincipal.src = imagens[imagemAtual];

    // Atualizar destaque nas miniaturas
    const miniaturas = document.querySelectorAll(".miniaturas img");
    miniaturas.forEach((thumb, i) => {
      thumb.classList.toggle("ativa", i === index);
    });
  }
}

function avancarImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  exibirImagem(imagemAtual);
}

function voltarImagem() {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  exibirImagem(imagemAtual);
}

// Inicia com miniatura destacada
document.addEventListener("DOMContentLoaded", () => exibirImagem(0));
