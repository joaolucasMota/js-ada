// function media1(v1,v2,v3,v4){
//     soma = v1 + v2 +v3 + v4;
//     resultado = soma / 4
//     return resultado
// }

// function mediadois(v1,v2,v3,v4,d1,d2,d3,d4){
//     resultado = v1*1+v2*2+v3*4+v4*6
//     medias = 1 + 2 + 4 + 6
//     final = resultado/medias
//     return final
// }


const array= [1,2,3,4]


const media = array.reduce((acumulador,elemnto, index)=> {
    let total = acumulador + elemnto;
   
    return total;
    console.log(total)
});


