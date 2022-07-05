// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let shopping = ['leche', 'pan', 'azucar', 'yerba', 'galletas', 'cacao'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
shopping.push('Aceite de Girasol');

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
shopping.pop('Aceite de Girasol');

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const movies = [
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    releaseDate: new Date(1994, 10, 25)
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    releaseDate: new Date(2020, 07, 06)
  },
  {
    title: 'Back to the Future',
    director: 'Robert Zemeckis',
    releaseDate: new Date(2014, 07, 03)
  }
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newMovies = movies.filter(movie => {
  if (movie.releaseDate > new Date(2010, 01, 01)) {
    return true;
  } else {
    return false;
  }
});

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = movies.map(movie => movie.director);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const movieNew = movies.map(movie => movie.title);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directorAndTitle = movies.map(movie => movie.director);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newList = [...directors, ...movieNew];
