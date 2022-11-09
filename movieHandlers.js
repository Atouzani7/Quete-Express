const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const database = require("./database");

const getMovies = (req, res) => {
  database
  .query("select * from movies")
  .then((result) => {
    const movies = result[0];
    res.json(movies);
    // console.log(movies);
  })
  .catch((err) => {
    console.error(err);  
  });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database 
    .query("SELECT * FROM movies WHERE id = ?", [id])
    .then(([movies])=> {
      if(movies[0] !== null){
        res.json(movies[0])
      }else{
        res.status(404).send("Not found")
      }
    })
    .catch ((err) => {
      console.error(err);
      res.status(500).send("Error")
    }); 
};

const getUsers = (req, res) => {
  database
  .query("select * from movies")
  .then((result) => {
    const users = result[0];
    res.json(users);
  })
  .catch((err) => {
    console.error(err);  
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id); 

  database 
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([users])=> {
      if(users[0] !== null){
        res.status(200).json(users[0])
      }else{
        res.status(404).send("Not found")
      }
    })
    .catch ((err) => {
      console.error(err);
      res.status(500).send("Error")
    }); 
}

module.exports = {
  getMovies,
  getMovieById,
  getUserById,
  getUsers,
};
