const propiedades = [
    {   
        id: 1,
        imagen: "./asset/img/casa1.jpg",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: false,
        perros: false
    },
    {
        id: 2,
        imagen: "./asset/img/casa2.jpg",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: true,
        perros: false
    },

    {
        id: 3,
        imagen: "./asset/img/casa3.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: true,
        perros: true
    },
    {
        id: 4,
        imagen: "./asset/img/casa4.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: false,
        perros: false
    },
    {
        id: 5,
        imagen: "./asset/img/depa1.jpg",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: true,
        perros: false
    },
    {
        id: 6,
        imagen: "./asset/img/depa2.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: true,
        perros: false
    },
    {
        id: 7,
        imagen: "./asset/img/depa3.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: false,
        perros: true
    },
    {
        id: 8,
        imagen: "./asset/img/depa4.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: false,
        perros: true
    },
    {
        id: 9,
        imagen: "./asset/img/cabaña.webp",
        nombre: "Casa Deluxe",
        descripcion:"Casa elegante con puertas de cristal, iluminacion natural, 3 pisos y afilador en las paredes",
        valor:"250.000",
        fumar: true,
        perros: true
    },
];  
const tarjetas = document.getElementById('web');
console.log(tarjetas)

propiedades.forEach(propiedad => {
    tarjetas.innerHTML+= `<div class="cards card">
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" class="imagen card-img-top">
            <div class="card-body" > 
                <h3 class="card-title">${propiedad.nombre}</h3>
                <p class="card-text">${propiedad.descripcion}</p>
                <p>$ ${propiedad.valor}</p>
                <p ${propiedad.fumar ? "class= text-success": "class= text-danger"} >Permitido catnip: ${propiedad.fumar ?  "Permitido" : "Prohibido"}</p>
                <p ${propiedad.perros ? "class= text-success": "class= text-danger"} >Permitido perros: ${propiedad.perros ?  "Permitido" : "Prohibido"}</p>
            </div>
        </div>`
    });