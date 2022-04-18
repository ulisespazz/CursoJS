/*
Busqueda del cero:
Ingreso 20 numeros. Si el numero leido es igual a cero se debe
salir del bucle y mostrar el mensaje "se capturo el numero cero". El programa
debera calcular y mostar el resultado de la suma de los numero leidos, pero si el 
numero es negativo no debe sumarse.
*/
let suma = 0
let num
for (let i = 0; i < 20; i++) {
    do{
        num = parseInt(prompt("Ingrese un numero"))
        console.log(num)
    }while(isNaN(num))

    if (num == 0){
        console.log("Se capturo el cero")
        break
    }else if(num < 0){
        suma = suma + 0  
    }else{
        suma = suma + num
    }
}
console.log("la suma de los numero es", suma)