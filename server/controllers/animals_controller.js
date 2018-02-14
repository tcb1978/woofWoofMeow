module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { name, breed, age, weight, sex, user_id  } = req.body;
    console.log(req.body);

    db.create_animal([ name, breed, age, weight, sex, user_id ])
      .then( (animal) => res.status(200).json(animal) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_animals([])
      .then( (animals) => res.status(200).send(animals) )
      .catch( () => res.status(500).send() )
  },

  getUserAnimals: (req, res, next) => {
    const db = req.app.get('db');

    db.get_animals_by_user([])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');

    db.get_animal([])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');

    db.update_animal([])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');

    db.delete_animal([])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )
  }
}