//Vamos consumir a API do viacep, API altamente usada por ser free
//Conceitos novos: async, try-catch e throw new Error

// async: Funções Assíncronas
// O async é uma palavra-chave que você coloca antes de uma função para definir que ela é assíncrona. Isso significa que, dentro dessa função, você pode usar a palavra-chave await para esperar a conclusão de uma operação assíncrona, como uma promessa (Promise), antes de prosseguir para a próxima linha de código.

// try-catch: Tratamento de Erros
// O bloco try-catch permite capturar e tratar erros que ocorrem no código. Dentro de um bloco try, você executa o código que pode falhar. Se houver algum erro (seja um erro de rede, erro de sintaxe, ou qualquer outro tipo), ele será "capturado" pelo bloco catch.

// throw new Error: Lançando Erros Personalizados
// A palavra-chave throw em JavaScript é usada para lançar erros de forma explícita. Isso significa que você pode criar um erro personalizado em qualquer ponto do seu código para sinalizar que algo inesperado aconteceu.

async function consultarCEP(cep) {
  try {
    //guardando o caminho da requisição em uma variável para utilizar depois
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    //aqui a gente verifica se dentro da resposta (response) NÃO tem um OK, percebam o uso da ! antes do response  (!response), vimos isso nas últimas aulas
    //se o if for satisfeito, ele lança um erro com o status´
    if (!response.ok) {
      throw new Error(`Erro ao buscar o CEP: ${response.status}`);
    }

    //aqui a gente faz a requisição e converte a resposta para JSON
    const data = await response.json();
    console.log("Dados do endereço:", data);

    if (data.erro) {
      console.error("CEP não encontrado!");
    } else {
      console.log(`Logradouro: ${data.logradouro}`);
      console.log(`Bairro: ${data.bairro}`);
      console.log(`Cidade: ${data.localidade}`);
      console.log(`Estado: ${data.uf}`);
    }
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

consultarCEP("01001000");
