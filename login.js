
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

form.addEventListener('submit', function(event) {
  // Validar e-mail
  if (!emailInput.validity.valid) {
    event.preventDefault();
    if (emailInput.validity.valueMissing) {
      emailError.textContent = 'Campo obrigatório.';
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = 'E-mail inválido.';
    } else if (emailInput.validity.patternMismatch) {
      emailError.textContent = 'E-mail não é de um domínio válido.';
    }
  } else {
    emailError.textContent = '';
  }
  // Validar senha
  if (!passwordInput.validity.valid) {
    event.preventDefault();
    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = 'Campo obrigatório.';
    } else if (passwordInput.validity.tooShort) {
      passwordError.textContent = 'Senha deve ter no mínimo 6 caracteres.';
    }
  } else {
    passwordError.textContent = '';
  }
});

// Validar domínio do e-mail
emailInput.addEventListener('input', function(event) {
  const value = event.target.value;
  if (value.includes('@')) {
    
  }
});
