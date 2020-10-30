function calculo(x) {

	var campo = document.querySelector("input.campo");
	

	if (campo.value != "") {


		a = campo.value.length;
		b = a - 1;

		/* ACHO QUE AINDA VOU USAR ISSO AQUI
		switch (campo.value.slice(b, a)) {

			case x:
			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;
			break;




			default:
			campo.value = campo.value + x;
		}*/


		if (x == "1") {

			campo.value = campo.value + x;

		} else if (x == "2") {

			campo.value = campo.value + x;

		} else if (x == "3") {

			campo.value = campo.value + x;

		} else if (x == "4") {

			campo.value = campo.value + x;

		} else if (x == "5") {

			campo.value = campo.value + x;

		} else if (x == "6") {

			campo.value = campo.value + x;

		} else if (x == "7") {

			campo.value = campo.value + x;

		} else if (x == "8") {

			campo.value = campo.value + x;

		}else if (x == "9") {

			campo.value = campo.value + x;

		}else if (x == "0") {

			campo.value = campo.value + x;

		} else if (campo.value.slice(b, a) === x) {

			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;

		} else if (campo.value.slice(b, a) === "+") {

			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;

		}else if (campo.value.slice(b, a) === "-") {
			
			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;

		} else if (campo.value.slice(b, a) === "x") {
			
			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;

		} else if (campo.value.slice(b, a) === "÷") {
			
			campo.value = campo.value.slice(0, -1);
			campo.value = campo.value + x;

		} else {

			campo.value = campo.value + x;
		}

		
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
