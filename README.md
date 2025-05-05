# 🚗 TMotors – Catálogo de Veículos

## 🖼️ Preview do Site

![Preview do site](./imagens/screenshot.png)


Este projeto é um site de exibição de veículos, desenvolvido com HTML, CSS e JavaScript puros, com carregamento dinâmico de dados a partir de um arquivo JSON. O site permite ao usuário visualizar a lista de carros disponíveis, aplicar filtros e acessar uma página com detalhes individuais de cada veículo.

## 🌟 Funcionalidades

- ✅ **Listagem dinâmica de veículos** com base em um arquivo JSON (`carros.json`)
- 🔎 **Filtros interativos** por:
  - Marca
  - Modelo
  - Preço (A-Z e Z-A)
  - Condição (Novo ou Semi-novo)
- 📄 **Página individual do veículo** (`carro.html`) com:
  - Imagens e dados carregados automaticamente com base no `id` do carro
  - Scroll automático para a seção de proposta
- 📁 Estrutura modular com JavaScript e CSS separados
- 🧩 Preparado para futura integração com **visualização 360º do veículo**

## 📁 Estrutura de Pastas

tmotors-site/
├── carro.html # Página com detalhes do veículo
├── index.html # Página principal com os cards dos carros
├── carros.json # Base de dados com os veículos
├── js/
│ ├── main.js # Lógica da página principal (filtros + listagem)
│ └── detalhes.js # Lógica para exibir dados na página carro.html
├── css/
│ └── style.css # Estilização principal do site
└── README.md # (Você está aqui!)


## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (puro)
- JSON para dados dinâmicos

## 🚀 Como Rodar Localmente

> ⚠ Por motivos de segurança do navegador, o carregamento local de arquivos JSON pode falhar se você abrir o HTML diretamente (`file://`). Use um servidor local.

### Usando o Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Abra o projeto no VS Code
3. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**

### Alternativa: Servidor com Node.js

```bash
npx serve
