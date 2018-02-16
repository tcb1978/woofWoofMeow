module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_caregivers([])
      .then( (caregivers) => res.status(200).json(caregivers) )
      .catch( (error) => res.status(500).send(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_caregiver([ id ])
      .then( (caregiver) => res.status(200).json(caregiver) )
      .catch( (error) => res.status(500).send(error) );
  }
}