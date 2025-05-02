document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
  
        const numero = "11962105759"; // WhatsApp com DDI e DDD
        const mensagem = `Olá! Me chamo *${nome}*.\n\n📧 Email: ${email}\n📞 Telefone: ${telefone}\nGostaria de falar com você.`;
  
        const url = `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
  
        window.open(url, "_blank");
      });
    }
  });
  