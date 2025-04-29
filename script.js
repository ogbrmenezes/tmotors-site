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
    imagem: "imagens/tcrosnova.jpeg"
  },
  {
    id: 2,
    nome: "BMW 320i",
    marca: "BMW",
    modelo: "320i",
    preco: 189000,
    tipo: "novo",
    ano: 2022,
    km: 0,
    combustivel: "Gasolina",
    imagem: "imagens/bmw320i.jpg"
  },
  {
    id: 3,
    nome: "T-Cross",
    marca: "Volkswagen",
    modelo: "tcross",
    preco: 119000,
    tipo: "seminovo",
    ano: 2018,
    km: 98000,
    combustivel: "Flex",
    imagem: "imagens/tcrosnova.jpeg"
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
