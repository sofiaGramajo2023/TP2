/* - Realiza un script que pida una cadena de texto y lo muestre poniendo el signo –
 entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
 deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/ 


 

let texto = prompt("Ingrese un texto:");

let longitud = texto.length;  
let caracter;
let i;

for (i = 0; i < longitud; i++) {

    caracter = texto.charAt(i);   

    if (i == longitud - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}