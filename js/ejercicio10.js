/* Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas
 deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los 
 números irán del 35 al 1.*/


 let filas= +prompt('Ingrese el número de filas');

 let columnas= +prompt('Ingrese el número de columnas');

 resultado = filas * columnas;

 document.write("<table border>");

 for (i = 0; i < filas; i++) {

    document.write("<tr>");
 

        for (j = 0; j < columnas; j++){

            document.write("<td>");
            

        document.write(resultado);

        resultado--;

        document.write("</td>");
        }


        document.write("</tr>");

    }

    document.write("</table>");