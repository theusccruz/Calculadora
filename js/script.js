function calculo(x) {

	var campo = document.querySelector("input.campo");
	

	if (campo.value != "") {

		campo.value = campo.value + x;

	} else {

		campo.value = x;
	}

	var campo = document.querySelector("input.campo");
	var tela = document.getElementById('tela');


	var valor = campo.value;

	var rep = valor.replace(/÷/g, "/");	

	var result = rep.replace(/x/g, "*");	

	tela.innerHTML = eval(result);


}

function result() {

	var campo = document.querySelector("input.campo");
	var tela = document.getElementById('tela');


	var valor = campo.value;

	var rep = valor.replace(/÷/g, "/");	

	var result = rep.replace(/x/g, "*");	

	tela.innerHTML = eval(result);

}

function deleteAll() {

	var campo = document.querySelector("input.campo");
	var tela = document.getElementById('tela');

	campo.value = "";
	tela.innerHTML = "";


}

function dlt() {

	var campo = document.querySelector("input.campo");
	var tela = document.getElementById('tela');

	tela.innerHTML = "";

	campo.value = campo.value.slice(0, -1);

	console.log(campo.value);


}
