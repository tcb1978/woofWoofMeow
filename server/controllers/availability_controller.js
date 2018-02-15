module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, month, day, year, begin_time, end_time, am_pm  } = req.body;
    console.log(req.body);

    db.create_availability([ user_id, month, day, year, begin_time, end_time, am_pm ])
      .then( (availability) => res.status(200).json(availability) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_availability([])
      .then( (availability) => res.status(200).send(availability) )
      .catch( (error) => res.status(500).send(error) )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { month, day, year, begin_time, end_time, am_pm } = req.body;
    console.log(req.params);
    console.log(id);
    console.log(req.body);
    console.log(month, day, year, begin_time, end_time, am_pm);

    // Later 1 is gonna session user id
    db.update_availability([month, day, year, begin_time, end_time, am_pm, 1, id])
      .then( (availability) => res.status(200).json(availability) )
      .catch( (error) => res.status(500).send(error) )
  }
}