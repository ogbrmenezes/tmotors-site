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

      // Dados do usuário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const mensagem = document.getElementById("mensagem").value;

      // Nome do carro (ajuste a classe conforme seu HTML)
      const nomeCarro = document.querySelector(".carro-nome")?.textContent || "o veículo";

      // Dados do carro
      const infoCarro = document.querySelectorAll(".carro-info-extra p");
      const ano = infoCarro[0]?.textContent || "";
      const cambio = infoCarro[1]?.textContent || "";
      const combustivel = infoCarro[2]?.textContent || "";
      const km = infoCarro[3]?.textContent || "";

      const imagemURL = "https://drive.google.com/uc?export=view&id=1HOMArooejyrf4RNBN3rmHkIU57vr-gBE";

      const texto = `Olá. Eu vim através do seu site e tenho interesse no carro *${nomeCarro}*. Seguem os dados abaixo:\n\n📷 *Imagem:* ${imagemURL}\n🚗 *Ano:* ${ano}\n⚙️ *Câmbio:* ${cambio}\n⛽ *Combustível:* ${combustivel}\n📏 *Km:* ${km}\n\n👤 *Nome:* ${nome}\n📧 *Email:* ${email}\n📞 *Telefone:* ${telefone}\n💬 *Mensagem:* ${mensagem}`;

      const numero = "5511962105759";
      const url = `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");
    });
  }
});
