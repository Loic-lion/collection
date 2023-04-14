const collection = [
  {
    name: "Requiem For A Dream",
    director: "Darren Aronofsky",
    releaseYear: 2000,
    picture: "images/Requiem.jpg",
    genre: "Drame",
    cast: [
      "Ellen Burstyn",
      " Jared Leto",
      " Jennifer Connelly",
      " Marlon Wayans",
    ],
  },
  {
    name: "L'Effet Papillon",
    director: "Eric Bress",
    releaseYear: 2004,
    picture: "images/Papillon.jpg",
    genre: "Drame",
    cast: ["Ashton Kutcher", " Melora Walters", " Amy Smart", " Alden Henson"],
  },
  {
    name: "Dune",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    picture: "images/Dune.jpg",
    genre: "Science-fiction",
    cast: [
      "Timothée Chalamet",
      " Rebecca Ferguson",
      " Oscar Isaac",
      " Zendaya",
    ],
  },
  {
    name: "Kill Bill V.1",
    director: "Quentin Tarantino",
    releaseYear: 2003,
    picture: "images/Killbill.jpg",
    genre: "Action",
    cast: ["Uma Thurman", " Lucy Liu", " Daryl Hannah", " David Carradine"],
  },
  {
    name: "Las Vegas Parano",
    director: "Terry Gilliam",
    releaseYear: 1998,
    picture: "images/lasvegas.jpg",
    genre: "Comédie noire",
    cast: ["Johnny Depp", " Benicio del Toro"],
  },
  {
    name: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    picture: "images/fight.jpg",
    genre: "Thriller psychologique",
    cast: ["Brad Pitt", " Edward Norton", " Helena Bonham Carter"],
  },
  {
    name: "Blade Runner",
    director: "Ridley Scott",
    releaseYear: 1982,
    picture: "images/blade.jpg",
    genre: "Science-fiction",
    cast: [
      "Harrison Ford",
      " Rutger Hauer",
      " Sean Young",
      " Edward James Olmos",
    ],
  },
  {
    name: "Watchmen: Les Gardiens",
    director: "Zack Snyder",
    releaseYear: 2009,
    picture: "images/watchmen.jpg",
    genre: " Super-héros",
    cast: [
      "Patrick Wilson",
      " Jackie Earle Haley",
      " Billy Crudup",
      " Malin Akerman",
    ],
  },
  {
    name: "The Shining",
    director: "Stanley Kubrick",
    releaseYear: 1980,
    picture: "images/shining.jpg",
    genre: "Horreur",
    cast: [
      "Jack Nicholson",
      " Shelley Duvall",
      " Danny Lloyd",
      " Scatman Crothers",
    ],
  },
  {
    name: "Orange Mécanique",
    director: "Stanley Kubrick",
    releaseYear: 1971,
    picture: "images/orange.webp",
    genre: "Anticipation",
    cast: [
      " Malcolm McDowell",
      " Patrick Magee",
      " Adrienne Corri",
      " Miriam Karlin",
    ],
  },
];

let article = document.querySelector("article");

collection.forEach((film) => {
  let section = document.createElement("section");
  section.innerHTML = `<img src= ${film.picture} > <span class="genredufilm" > ${film.genre} </span> <span class="titre_film"> ${film.name} </span> <span> Réaliseur: ${film.director} </span> <span> Année de sortie: ${film.releaseYear} </span> <span> Casting: ${film.cast}</span>  <div class="button"><img class="trash" src="images/icone_trash.png"></div> `;

  article.appendChild(section);
  section.setAttribute("class", "container_card");
});

let boutonsSupprimer = document.querySelectorAll(".trash");
boutonsSupprimer.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    let parentParent = bouton.parentNode.parentNode;
    parentParent.remove();
  });
});
