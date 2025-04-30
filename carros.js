const carros = [
    {
      id: 1,
      nome: "T-Cross",
      marca: "Volkswagen",
      modelo: "T-Cross",
      preco: 114890,
      tipo: "seminovo",
      ano: 2017,
      km: 118000,
      combustivel: "Flex",
      imagens: ["imagens\tcrosnova.jpeg"],
      opcionais: ["Ar-condicionado", "Airbags", "Multimídia", "Câmera de ré", "Freios ABS"]
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
      imagens: ["imagens/bmw320i.jpg", "imagens/bmw-lado.jpg", "imagens/bmw-interno.jpg"],
      opcionais: ["Ar digital", "Sensor de estacionamento", "Teto solar", "Bancos em couro", "Controle de tração"]
    }
  ];
  
  function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
  }
  
  window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const carro = carros.find(c => c.id === id);
  
    if (carro) {
      document.getElementById("img-principal").src = carro.imagens[0];
  
      // Miniaturas
      const galeria = document.getElementById("galeria");
      carro.imagens.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img;
        thumb.onclick = () => document.getElementById("img-principal").src = img;
        galeria.appendChild(thumb);
      });
  
      // Informações
      document.getElementById("info-carro").innerHTML = `
        <h2>${carro.nome} - ${carro.ano}</h2>
        <p><strong>Marca:</strong> ${carro.marca}</p>
        <p><strong>Modelo:</strong> ${carro.modelo}</p>
        <p><strong>Preço:</strong> R$ ${carro.preco.toLocaleString()}</p>
        <p><strong>Km:</strong> ${carro.km.toLocaleString()} km</p>
        <p><strong>Combustível:</strong> ${carro.combustivel}</p>
        <p><strong>Tipo:</strong> ${carro.tipo}</p>
      `;
  
      // Opcionais
      const listaOp = carro.opcionais.map(op => `<li>${op}</li>`).join("");
      document.getElementById("opcionais-carro").innerHTML = `
        <h2>Opcionais</h2>
        <ul>${listaOp}</ul>
      `;
  
      // WhatsApp
      const mensagem = encodeURIComponent(`Olá! Tenho interesse no ${carro.nome} ${carro.ano} que vi no site.`);
      const urlZap = `https://web.whatsapp.com/send?phone=+5511962105759&text=${mensagem}`;
      document.getElementById("contato-whatsapp").innerHTML = `
        <a href="${urlZap}" target="_blank">
          <i class="fab fa-whatsapp"></i> Falar sobre este carro
        </a>
      `;
    } else {
      document.querySelector(".container-carro").innerHTML = "<p style='color:white'>Carro não encontrado.</p>";
    }
  };
  
  document.getElementById("carro-ano").textContent = `${carro.ano}`;
document.getElementById("carro-cambio").textContent = "Automático"; // se tiver no objeto, use carro.cambio
document.getElementById("carro-combustivel").textContent = carro.combustivel;
document.getElementById("carro-km").textContent = `${carro.km.toLocaleString()} km`;
document.getElementById("carro-preco").textContent = `R$ ${carro.preco.toLocaleString()}`;
