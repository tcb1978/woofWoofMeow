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
    const { id } = req.params;
    console.log(req.params);
    console.log(req.body);

    db.get_animals_by_user([ id ])
      .then( (animals) => res.status(200).json(animals) )
      .catch( (error) => res.status(500).send(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log(req.params);
    console.log(req.body);

    // Later 1 is gonna session user id
    db.get_animal([ id, 1 ])
      .then( (animal) => res.status(200).json(animal) )
      .catch( (error) => res.status(500).send(error) )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { name } = req.body;

    // Later 1 is gonna session user id
    db.update_animal([ name, id, 1 ])
      .then( (animal) => res.status(200).json(animal) )
      .catch( (error) => res.status(500).send(error) )
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    // Later 1 is gonna session user id
    db.delete_animal([ id, 1 ])
      .then( () => res.status(200).send('deleted') )
      .catch( (error) => res.status(500).send(error) )
  }
}