/* Crea script para generar la pirámide siguiente con los números del 1 al número que indique
 el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/ 


let num= +prompt ('Ingrese un número no mayor a 50');

if (num < 50){

    for( let i=1; i<=num ; i++){

        for(let  j=0 ; j<i ; j++){

            document.write(i);
        }

        document.write('</br>'); 

    }

}else{
    alert('El número ingresado es mayor a 50');
}  

