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
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const mensagem = document.getElementById("mensagem").value;

      // Dados do carro da página (ajuste se os seletores mudarem)
      const ano = document.querySelector(".carro-info-extra div:nth-child(1) p")?.textContent || "";
      const cambio = document.querySelector(".carro-info-extra div:nth-child(2) p")?.textContent || "";
      const combustivel = document.querySelector(".carro-info-extra div:nth-child(3) p")?.textContent || "";
      const km = document.querySelector(".carro-info-extra div:nth-child(4) p")?.textContent || "";

      const emailTexto = email ? `📧 *Email:* ${email}\n` : "";

      const texto = `Olá. Eu vim através do seu site e tenho interesse no carro. Seguem meus dados:\n\n👤 *Nome:* ${nome}\n${emailTexto}📞 *Telefone:* ${telefone}\n💬 *Mensagem:* ${mensagem}\n\n📌 *Dados do veículo:*\n📅 *Ano:* ${ano}\n⚙️ *Câmbio:* ${cambio}\n⛽ *Combustível:* ${combustivel}\n📍 *KM:* ${km}`;

      const numero = "5511962105759";
      const url = `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");
    });
  }
});
