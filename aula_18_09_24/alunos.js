var alunos = JSON.parse(localStorage.getItem("alunos")) || [];
var alunoSelecionado = [];
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
                <td>                                     
                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditarAluno" onclick="buscarAluno(${aluno.id})">Editar</button>
                    <button class="btn btn-danger" onclick='excluirAluno(${aluno.id})'>Excluir</button>
                </td>
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
  var id = alunos?.length > 0 ? alunos.length + 1 : 1;
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
  localStorage.setItem("alunos", JSON.stringify(alunos));
  this.carregarTabela();
}

function excluirAluno(id) {
  alunos = alunos.filter(function (aluno) {
    return aluno.id !== id;
  });
  localStorage.setItem("alunos", JSON.stringify(alunos));

  this.carregarTabela();
}

function buscarAluno(id) {
  alunoSelecionado = alunos.filter(function (aluno) {
    return aluno.id == id;
  });
  document.getElementById("nomeAlunoEdit").value = alunoSelecionado[0].nome;
  document.getElementById("emailAlunoEdit").value = alunoSelecionado[0].email;
  document.getElementById("telefoneAlunoEdit").value =
    alunoSelecionado[0].telefone;
  document.getElementById("cpfAlunoEdit").value = alunoSelecionado[0].CPF;
  document.getElementById("dataNascAlunoEdit").value =
    alunoSelecionado[0].dataNascimento;
}

function verificaDadosEdit() {
  var nome = document.getElementById("nomeAlunoEdit").value;
  var email = document.getElementById("emailAlunoEdit").value;
  if (nome == "" || email == "") {
    alert("Nome e Email são obrigatórios");
  } else {
    editarAluno();
  }
}
function editarAluno() {
  alunos.forEach((aluno) => {
    if (aluno.id === alunoSelecionado[0].id) {
      aluno.nome = document.getElementById("nomeAlunoEdit").value;
      aluno.email = document.getElementById("emailAlunoEdit").value;
      aluno.telefone = document.getElementById("telefoneAlunoEdit").value;
      aluno.CPF = document.getElementById("cpfAlunoEdit").value;
      aluno.dataNascimento = document.getElementById("dataNascAlunoEdit").value;
      alert("Aluno editado");
    }
  });
  localStorage.setItem("alunos", JSON.stringify(alunos));
  carregarTabela();
}
