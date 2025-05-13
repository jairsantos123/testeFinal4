document.addEventListener('DOMContentLoaded', function() {

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      navLinks.forEach(l => l.classList.remove('active'));
      
      this.classList.add('active');
    });
  });

  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      sidebarLinks.forEach(l => l.classList.remove('active'));
      
      this.classList.add('active');
    });
  });

  const cartButton = document.querySelector('.cart-button');
  if (cartButton) {
    cartButton.addEventListener('click', function() {
      alert('Carrinho de compras clicado!');
    });
  }

  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        alert('Pesquisando por: ' + this.value);
      }
    });
  }

  const editButton = document.querySelector('.edit-button');
  if (editButton) {
    editButton.addEventListener('click', function() {
      alert('Modo de edição ativado!');
      
      const infoValues = document.querySelectorAll('.info-value');
      infoValues.forEach(value => {
        const currentText = value.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';
        value.innerHTML = '';
        value.appendChild(input);
      });
      
      this.textContent = 'Salvar';
      
      this.removeEventListener('click', arguments.callee);
      this.addEventListener('click', function() {
        alert('Informações salvas com sucesso!');
        
        const editInputs = document.querySelectorAll('.edit-input');
        editInputs.forEach(input => {
          const parent = input.parentNode;
          parent.textContent = input.value;
        });
        
        this.textContent = 'Editar';
        
        this.removeEventListener('click', arguments.callee);
        editButton.addEventListener('click', arguments.callee.caller);
      });
    });
  }
});