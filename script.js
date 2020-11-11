// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");

/**
 * Filtra y muestra los usuarios con mas de 500 en money
 */
const showFilteredList = res => {
  let filteredList = res.filter(u => u.money > 500);
  filteredList.forEach(element => console.log(element.name));
};

/**
 * Consigue los usuarios del fichero json
 */
const getUsers = () => {
  fetch("./users.json")
    .then(response => response.json())
    .then(data => showFilteredList(data));
};
buttonShowList.addEventListener("click", getUsers);
