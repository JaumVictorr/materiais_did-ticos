// Função para voltar à página inicial
function goHome() {
  window.location.href = 'index.html';
}

// Função para navegar para uma página de conteúdo
function navigateTo(page) {
  window.location.href = page + '.html';
}

// Adicionar evento de clique aos cards de materiais
document.addEventListener('DOMContentLoaded', function() {
  const materialCards = document.querySelectorAll('.material-card');
  
  materialCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });

    // Adicionar efeito de ripple ao clicar
    card.addEventListener('mousedown', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Smooth scroll para links internos
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Função para imprimir a página
function printPage() {
  window.print();
}

// Função para compartilhar página (se disponível)
function sharePage() {
  const title = document.title;
  const url = window.location.href;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(err => console.log('Erro ao compartilhar:', err));
  } else {
    alert('Copie o link: ' + url);
  }
}
