/*	Funcao que adiciona o afazer */
addAfazer = () => {

  var elemento = document.createElement('LI');
  var afazer = document.getElementById("afazer").value;
  var texto = document.createTextNode(afazer);

	/* se a variavel afazer estiver com valor executa a criação do afazer*/
	if(afazer != ""){
		elemento.appendChild(texto);
		document.querySelector('ul').appendChild(elemento);
		document.getElementById("afazer").value = "";

		/*	chamada das funcoes que add 1 botao de excluir e 1 de concluir o afazer*/
		buttonConcluir(elemento);
		buttonExcluir(elemento);
	}else{
		alert("ENTRADA INVALIDA \n\nDigite algo no campo!");
	}
}

/*	Funcao que conclui o afazer	*/
function buttonConcluir(elemento) {
  var conteiner = document.createElement("SPAN");
  var concluido = document.createTextNode("✓");

  conteiner.className = "concluido";
	conteiner.title = "Concluir";

  conteiner.appendChild(concluido);
  elemento.appendChild(conteiner);

  conteiner.onclick = () => conteiner.parentElement.style.textDecoration = "line-through";
}

/*	Funcao que excluir o tarefa */
function buttonExcluir(elemento) {
  var conteiner1 = document.createElement("SPAN");
  var exclui = document.createTextNode("✖");

  conteiner1.className = "exclui";
	conteiner1.title = "Excluir";

  conteiner1.appendChild(exclui);
  elemento.appendChild(conteiner1);

  conteiner1.onclick = () => conteiner1.parentElement.style.display = "none";
}