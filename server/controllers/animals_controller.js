module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { animal_name, breed, age, weight, sex, animal_avatar, animal_about_message } = req.body;

    db.create_animal([animal_name, breed, age, weight, sex, animal_avatar, animal_about_message, req.session.user.user_id ])
      .then( (animal) => res.status(200).json(animal) )
      .catch( (error) => res.status(500).send(error) )
  },

  getUserAnimals: (req, res, next) => {
    const db = req.app.get('db');

    db.get_animals_by_user([ req.session.user.user_id ])
      .then( (animals) => res.status(200).json(animals) )
      .catch( (error) => res.status(500).send(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { petowner_id } = req.params;
    
    db.get_animal([ petowner_id || req.session.user.user_id ])
      .then( (animal) => { res.status(200).json(animal); console.log('Animal', animal); } )
      .catch( (error) => res.status(500).send(error) )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { animal_name } = req.body;

    // Later 1 is gonna session user id
    db.update_animal([ animal_name, id, req.session.user.user_id ])
      .then( (animal) => res.status(200).json(animal) )
      .catch( (error) => res.status(500).send(error) )
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_animal([ id, req.session.user.user_id ])
      .then( () => res.status(200).send('deleted') )
      .catch( (error) => res.status(500).send(error) )
  }
}