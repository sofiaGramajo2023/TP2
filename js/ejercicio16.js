/* Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
 si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/


 let texto = prompt("Escriba un Texto:");

    let longitud = texto.length;
    let i;
    let palabra;
    let textoReves = " ";

    for (i = 0; i < longitud; i++) {

        palabra = texto.charAt(i);    
        textoReves= palabra + textoReves;
    }

    document.write(textoReves);