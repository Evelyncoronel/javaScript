
const talles = [1,2,3,4]
console.log(talles)

talles[4] = 'sin Stock';

const colores = [negro, lila, azul, verde]
console.log(colores)


if (colores){
    console.log ("Está disponible");
} else { console.log ("Sin stock");
}

let enStock = colores.find (function(color) {
    return color == "negro";
});
if (enStock) { 
    console.log ("enStock");
} else {
    console.log ("Sin stock");
};


