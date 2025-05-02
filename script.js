function toggleMenu() {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('active');
}

const carros = [
  {
    id: 1,
    nome: "T-Cross",
    marca: "Volkswagen",
    modelo: "tcross",
    preco: 114890,
    tipo: "seminovo",
    ano: 2017,
    km: 118000,
    combustivel: "Flex",
    imagem: "imagens/tcros/tcrosnova.jpeg"
  },
  {
    id: 1,
    nome: "T-Cross",
    marca: "Volkswagen",
    modelo: "tcross",
    preco: 114890,
    tipo: "seminovo",
    ano: 2017,
    km: 118000,
    combustivel: "Flex",
    imagem: "imagens/tcros/tcrosnova.jpeg"
  },
  {
    id: 1,
    nome: "T-Cross",
    marca: "Volkswagen",
    modelo: "tcross",
    preco: 114890,
    tipo: "seminovo",
    ano: 2017,
    km: 118000,
    combustivel: "Flex",
    imagem: "imagens/tcros/tcrosnova.jpeg"
  }
];

function filtrarCarros() {
  const marca = document.getElementById("filtroMarca").value.toLowerCase();
  const modelo = document.getElementById("filtroModelo").value.toLowerCase();
  const preco = document.getElementById("filtroPreco").value;
  const tipo = document.getElementById("filtroTipo").value.toLowerCase();

  let resultado = carros;

  if (marca)
    resultado = resultado.filter(c => c.marca.toLowerCase() === marca);
  if (modelo)
    resultado = resultado.filter(c => c.modelo.toLowerCase() === modelo);
  if (tipo)
    resultado = resultado.filter(c => c.tipo.toLowerCase() === tipo);

  if (preco === "asc") resultado.sort((a, b) => a.preco - b.preco);
  if (preco === "desc") resultado.sort((a, b) => b.preco - a.preco);

  exibirCarros(resultado);
}

function exibirCarros(lista) {
  const container = document.getElementById("lista-carros");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum carro encontrado.</p>";
    return;
  }

  lista.forEach(carro => {
    const card = document.createElement("div");
    card.className = "card-carro";
    card.innerHTML = `
      <img src="${carro.imagem}" alt="${carro.nome}">
      <div class="card-info">
        <h3>${carro.nome}</h3>
        <p>R$ ${carro.preco.toLocaleString()}</p>
        <div class="detalhes">
          <span><strong>Ano:</strong> ${carro.ano}</span>
          <span><strong>Km:</strong> ${carro.km.toLocaleString()}</span>
          <span><strong>Combustível:</strong> ${carro.combustivel}</span>
        </div>
        <button onclick="location.href='carro.html?id=${carro.id}'">Mais detalhes</button>
      </div>
    `;
    container.appendChild(card);
  });
}

window.onload = () => exibirCarros(carros);


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const mensagem = document.getElementById("mensagem").value;
      const promocoes = document.getElementById("promocoes").checked ? "Sim" : "Não";

      const imagemID = "1HOMArooejyrf4RNBN3rmHkIU57vr-gBE";
      const imagemURL = `https://drive.google.com/uc?export=view&id=${imagemID}`;

      const texto = `*Proposta de Veículo:*\n\n📷 ${imagemURL}\n\n👤 *Nome:* ${nome}\n📧 *Email:* ${email}\n📞 *Telefone:* ${telefone}\n💬 *Mensagem:* ${mensagem}\n📰 *Aceita promoções:* ${promocoes}`;

      const numero = "5511962105759";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");
    });
  } else {
    console.error("Formulário não encontrado!");
  }
});


  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const marca = document.querySelector('input[placeholder="Marca do Veículo"]').value;
    const modelo = document.querySelector('input[placeholder="Modelo do Veículo"]').value;
    const versao = document.querySelector('input[placeholder="Versão do Veículo"]').value;
    const ano = document.querySelector('input[placeholder="Ano do Veículo"]').value;
    const km = document.querySelector('input[placeholder="KM do Veículo"]').value;
    const valor = document.querySelector('input[placeholder="Valor Desejado"]').value;
    const nome = document.querySelector('input[placeholder="Seu Nome"]').value;
    const email = document.querySelector('input[placeholder="Seu Email"]').value;
    const telefone = document.querySelector('input[placeholder="Telefone"]').value;

    const texto = `*Proposta de Venda de Veículo:*\n\n🚗 *Marca:* ${marca}\n📘 *Modelo:* ${modelo}\n📄 *Versão:* ${versao}\n📆 *Ano:* ${ano}\n🛣️ *KM:* ${km}\n💰 *Valor Desejado:* ${valor}\n\n👤 *Nome:* ${nome}\n📧 *Email:* ${email}\n📞 *Telefone:* ${telefone}`;

    const numero = "5511962105759";
    const url = `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;

    // Força o WhatsApp Web na mesma aba
    window.location.href = url;
  });

