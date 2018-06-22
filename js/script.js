document.getElementById('calculate-button').onclick=function() {

	var elem1= document.getElementById('elem1');
	var elem2= document.getElementById('elem2');
//reading input values
	var valor1=parseInt(elem1.value);
	var valor2=parseInt(elem2.value);

//chosen operator
	var operation=document.querySelector('input[name="operation"]:checked');
	var chosenOperation= operation.value;

//função que analisa o operador e faz o cálculo 
	function getResult(elem1,elem2,operator){
		if(operator=='+'){
			return valor1+valor2;
		} else if(operator=='-'){
			return valor1 - valor2;
		} else if(operator=='x'){
			return valor1*valor2;
		} else if(operator=='÷') {
			return valor1/valor2;
		} else if (operator=='ˆ') {
			return Math.pow(valor1,valor2);
		}else{
			return 'Operação inválida'
		}

	}

	function testInput(valor1,valor2){
		if (isNaN(valor1)) {
			alert('Entrada inválida');
			elem1.focus();
		}
		else if (isNaN(valor2)) {
			alert('Entrada inválida');
			elem2.focus();
		}
		else{
			var resultado = getResult(valor1,valor2,chosenOperation);
			var result = document.getElementById('result');
			result.innerText= resultado;
		}
	}

	testInput(valor1,valor2);
}


