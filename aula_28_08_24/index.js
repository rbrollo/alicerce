const usuarioCadastrado = { usuario: "admin", senha: "123" };

function login() {
  const usuarioForm = document.getElementById("usuario").value;
  const senhaForm = document.getElementById("senha").value;

  if (
    usuarioForm === usuarioCadastrado.usuario &&
    senhaForm === usuarioCadastrado.senha
  ) {
    alert("Login bem-sucedido!");
    window.open("index.html");
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
