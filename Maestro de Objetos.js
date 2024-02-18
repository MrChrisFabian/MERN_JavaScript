const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] }, { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

console.log("Objetos con identificador divisible con 3")
const div3 = pokemon.filter(val => val.id % 3 === 0);
console.log(div3);

console.log("Objetos pokemon del tipo fuego")
const fire = pokemon.filter(elemento => elemento.types.includes("fire"));
console.log(fire)

console.log("Objetos pokemon con mas de un tipo")
const multipo = pokemon.filter(elemento => elemento.types.length != 1);
console.log(multipo)

console.log("Lista de Nombres de pokemon")
const names = pokemon.map(elementos => elementos.name)
console.log(names)

console.log("Nombres de pokemon con id>99")
const pokes99 = pokemon.filter(ele => ele.id >= 99)
const names99 = pokes99.map(elementos => elementos.name)
console.log(names99)

console.log("Nombres de pokemon tipo Veneno")
const pokes = pokemon.filter(x => x.types.includes("poison"))
const onlyP = pokes.filter(x => x.types.length == 1);
const pokesV = onlyP.map(elementos => elementos.name)
console.log(pokesV)

console.log("Primer tipo de Pokemones cuyo segundo tipo es volador")
const volador = multipo.filter(x => x.types[1] == "flying")
const pTipo = volador.map(x => x.types[0])
console.log(pTipo);

console.log("Recuento de pokemones de tipo Normal")
const normal = pokemon.filter(elemento => elemento.types.includes("normal"));
let cont = 0;
normal.forEach(x => {
    cont += 1;
}
)
console.log(cont)
