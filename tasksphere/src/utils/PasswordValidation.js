import { validatePassword } from "firebase/auth";

function PasswordValidation(senha, confirmPassword) {
  const erros = [];

  if (senha.length < 8) {
    erros.push('A senha precisa ter pelo menos 8 caracteres.');
  }

  if (!/[A-Z]/.test(senha)) {
    erros.push('A senha deve conter pelo menos uma letra maiúscula.');
  }

  if (!/[a-z]/.test(senha)) {
    erros.push('A senha deve conter pelo menos uma letra minúscula.');
  }

  if (!/[0-9]/.test(senha)) {
    erros.push('A senha deve conter pelo menos um número.');
  }

  if (!/[!@#$%^&*()_+`\-={}[\]|\\:;"'<>,.?/~]/.test(senha)) {
    erros.push('A senha deve conter pelo menos um caractere especial (!@#$%...).');
  }

  if (senha !== confirmPassword) {
    erros.push('As senhas não coincidem.');
  }

  return erros;
}


export default PasswordValidation;