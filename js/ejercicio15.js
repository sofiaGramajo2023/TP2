// Realiza un script que cuente el número de vocales que tiene un texto.


let texto = prompt("Escriba un texto:");

let longitud = texto.length;   

texto = texto.toUpperCase();  

let palabra;
let contador = 0;
let i;

for (i = 0; i < longitud; i++) {
    palabra = texto.charAt(i);   
    if ((palabra == "A") || (palabra == "E") || (palabra == "I") || (palabra == "O") || (palabra == "U")) {
        
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");