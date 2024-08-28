var alunos = [
  {
    id: 1,
    nome: "Ana",
    email: "mail@mail.com",
    telefone: "81999999999",
    CPF: "76246935001",
    dataNascimento: "2000-08-12",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "João",
    email: "mail2@mail.com",
    telefone: "21988888888",
    CPF: "62987183038",
    dataNascimento: "2001-06-15",
    status: "Inativo",
  },
  {
    id: 3,
    nome: "Rogério",
    email: "mail3@mail.com",
    telefone: "21977777777",
    CPF: "98625619045",
    dataNascimento: "2002-01-19",
    status: "Ativo",
  },
];

function carregarTabela() {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  alunos.forEach((aluno) => {
    tbody.innerHTML += `
            <tr class="text-center">
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.email}</td>
                <td>${aluno.status}</td>               
            </tr>
        `;
  });
}

function verificaDados() {
  var nome = document.getElementById("nomeAluno").value;
  var email = document.getElementById("emailAluno").value;
  if (nome == "" || email == "") {
    alert("Nome e Email são obrigatórios");
  } else {
    adicionarAluno();
  }
}

function adicionarAluno() {
  var id = alunos.length + 1;
  var nome = document.getElementById("nomeAluno").value;
  var email = document.getElementById("emailAluno").value;
  var telefone = document.getElementById("telefoneAluno").value;
  var CPF = document.getElementById("cpfAluno").value;
  var dataNascimento = document.getElementById("dataNascAluno").value;

  var novoAluno = {
    id: id,
    nome: nome,
    email: email,
    telefone: telefone,
    CPF: CPF,
    dataNascimento: dataNascimento,
    status: "Ativo",
  };

  document.getElementById("nomeAluno").value = "";
  document.getElementById("emailAluno").value = "";
  document.getElementById("telefoneAluno").value = "";
  document.getElementById("cpfAluno").value = "";
  document.getElementById("dataNascAluno").value = "";

  alunos.push(novoAluno);
  alert(`Aluno ${novoAluno.nome} cadastrado com sucesso`);
  this.carregarTabela();
}