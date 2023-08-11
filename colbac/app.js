function minota(nota1,nota2,nota3){
    
    let arraynota = [nota1,nota2,nota3];

    let notadefinitiva = calcular(arraynota,porcentaje)
    console.log(notadefinitiva)
}
    
    function calcular(notadefinitiva, porcentaje){ 
        let suma=0;
      
        notadefinitiva.forEach(notas => ( suma += notas));

        suma = suma / notadefinitiva.length;

       
       console.log(porcentaje(notadefinitiva))
       return suma;

}



function porcentaje(notadefinitiva) {

    
    let pnota1=(notadefinitiva[0]*0.3)
    let pnota2=(notadefinitiva[0]*0.3)
    let pnota3=(notadefinitiva[0]*0.3)


    
    console.log(`es el ${pnota1} y el  ${pnota2} y el  ${pnota3}`)

    let arreglo=[];
    arreglo.push(pnota1,pnota2,pnota3);
    return arreglo
    
    
}
    

   
    

// const minota = (nota1,nota2,nota3)=>{
//     let arraynota = [nota1,nota2,nota3];

//     let arreglo = calcular(arraynota)
//     console.log(arreglo)
// }

// const calcular = (arreglo) => {
//     let suma=0;
//     arreglo.forEach(notas => ( suma += notas));
//       suma = suma / arreglo.length;

//         return suma;

// }



// calcular.addEventListener("click",()=>{
//     function funcion1(){
//         alert("es la funcion 1 ");
    
//         funcion2(funcion3)
//     }
    
//     function funcion2(funcion3){
//         funcion3()
//         alert("es la funcion 3 en la tercera posicion")
//     }
    
//     function funcion3(){
//         alert("funcion 2 ");
//     }
    
//    funcion1()
// })