function calculo(x) {

	var campo = document.querySelector("input.campo");
	

	if (campo.value != "") {

		campo.value = campo.value + x;

	} else {

		campo.value = x;
	}


}

function result() {

	var campo = document.querySelector("input.campo");
	var tela = document.getElementById('tela');


	var valor = campo.value;

	var rep = valor.replace(/÷/g, "/");	

	var result = rep.replace(/x/g, "*");	

	tela.innerHTML = eval(result);
			





}
