module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, month, day, year, begin_time, end_time, am_pm  } = req.body;
    console.log(req.body);

    db.create_booking([ user_id, month, day, year, begin_time, end_time, am_pm ])
      .then( (booking) => res.status(200).json(booking) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_bookings([])
      .then( (bookings) => res.status(200).send(bookings) )
      .catch( (error) => res.status(500).send(error) )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { user_id, month, day, year, begin_time, end_time, am_pm } = req.body;
    console.log(req.params);
    console.log(id);
    console.log(req.body);

    // Later 1 is gonna session user id
    db.update_booking([month, day, year, begin_time, end_time, am_pm, 3, id])
      .then( (booking) => res.status(200).json(booking) )
      .catch( (error) => res.status(500).send(error) )
  }
}