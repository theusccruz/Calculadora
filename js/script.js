function number(x) {

	var campo = document.querySelector("input.campo");
	

	if (campo.value != "") {

		campo.value = campo.value + x;

	} else {

		campo.value = x;
	}

}