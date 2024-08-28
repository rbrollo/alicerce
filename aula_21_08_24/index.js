var coisas = [
  { tipo: "fruta", nome: "abacaxi" },
  { tipo: "fruta", nome: "laranja" },
  { tipo: "remédio", nome: "dorflex" },
];
var coisaSelecionada = [];

coisaSelecionada = coisas.filter(function (coisa) {
  return coisa.tipo != "remédio";
});
console.log(coisaSelecionada);
