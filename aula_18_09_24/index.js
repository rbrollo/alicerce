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

var carregarDadosCard = () => {
  var numAlunos = 0;
  numAlunos = (alunos?.length && alunos?.length > 0) ?? 0;
  const card1 = document.querySelector(".card1");
  card1.innerHTML = `Alunos: ${numAlunos}`;
  const numProfessores = "10";
  const card2 = document.querySelector(".card2");
  card2.innerHTML = `Professores: ${numProfessores}`;
};
