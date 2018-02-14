module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_petowners([])
      .then( (petowners) => res.status(200).json(petowners) )
      .catch( (error) => res.status(500).send(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_petowner([ id ])
      .then( (petowner) => res.status(200).json(petowner) )
      .catch( (error) => res.status(500).send(error) );
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.params);
    const { id } = req.params;
    console.log(id);

    db.delete_petowner([ id ])
      .then( () => res.status(200).json('deleted') )
      .catch( (error) => res.status(500).send(error) );
  }
}