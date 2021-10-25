//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
let bicycles = [
    {
        nome: 'Canondale',
        peso: 6,

    },
    {
        nome: 'S-works',
        peso: 7,

    },
    {
        nome: 'Scott',
        peso: 8,

    },
    {
        nome: 'Bianchi',
        peso: 6.5,

    },
]
for (const peso in bicycles) {
    const element = bicycles[peso];

    console.log(bicycles[peso]);

}



let divEl = document.querySelector(".container")