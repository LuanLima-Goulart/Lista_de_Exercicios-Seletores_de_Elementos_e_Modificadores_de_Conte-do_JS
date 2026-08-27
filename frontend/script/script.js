// Questão 1
const tituloTag = document.querySelector("h1");
console.log(tituloTag);

// Questão 2
const subtitulo = document.getElementsByClassName("subtitulo");
console.log(subtitulo[0].textContent);

// Questão 3
const produtos = document.querySelectorAll(".produto");
console.log(produtos.length);

// Questão 4
const preco = document.querySelectorAll(".preco");
console.log(preco[0]);

// Questão 5
const produto2 = document.getElementById("produto-2");
console.log(produto2);

// Questão 6
const produto1h1 = document.querySelector("#produto-1 h2");
console.log(produto1h1.textContent);
console.log(produto1h1.innerHTML);
console.log(produto1h1.innerText);

// Questão 7
const lojaTurma = document.getElementById("titulo");
lojaTurma.textContent = "Loja da Turma - Promoção!";
console.log(lojaTurma.textContent);

// Questão 8
const rodape = document.getElementById("rodape");
rodape.textContent = "Todos os direitos reservados ©️ 2026";
console.log(rodape.textContent);

// Questão 9
const descri = document.querySelector("#produto-3 .descricao");
descri.textContent = "Perfeita para o inverno.";
console.log(descri.textContent);

// Questão 10
const produto2h2 = document.querySelector("#produto-2 h2");
produto2h2.innerHTML = "Camiseta <strong>Dev</strong> - Edição Limitada";
console.log(produto2h2.innerHTML);
const produto2h2_text = document.querySelector("#produto-2 h2");
produto2h2_text.textContent = "Camiseta <strong>Dev</strong> - Edição Limitada";
console.log(produto2h2.textContent);
// Resposta: O <strong></strong> aparece junto no título.

// Questão 11
const carrinho = document.querySelector("#contador-carrinho");
carrinho.textContent = 3;
console.log(carrinho.textContent);

// Questão 12
const avisos = document.querySelector("#lista-avisos");
avisos.innerHTML = "<h2>Avisos!</h2> <li>Não aceitamos fiado!</li> <br> <li>Não tem avisos</li>";
console.log(avisos.innerHTML);

// Questão 13
const produto1 = document.querySelector("#produto-1 h2");
produto1.innerHTML = "<h2>Se leu, problema não é meu!</h2>";
console.log(produto1.innerHTML);

const produto2_2 = document.querySelector("#produto-2 .preco");
produto2_2.textContent = 999.01;
console.log(produto2_2.textContent);

const produto3 = document.querySelector(".descricao");
produto3.textContent = "Olhe para trás 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀";
console.log(produto3.textContent);

// Questão 14
// Resposta: Botão, queryselector/getElementsById/getElementsClassName para saber qual item 
// foi colocado no carrinho, uma função para contabilizar.