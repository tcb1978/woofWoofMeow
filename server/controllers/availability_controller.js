module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, day, time_range, begin_time, end_time  } = req.body;
    // console.log('req.body =>', req.body);

    db.create_availability([ user_id, day, time_range, begin_time, end_time ])
      .then( (availability) => res.status(200).json(availability) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_availability([])
      .then( (availability) => res.status(200).send(availability) )
      .catch( (error) => res.status(500).send(error) )
  },

  getUserAvailability: (req, res, next) => {
    const db = req.app.get('db');
    
    // Later 1 is gonna session user id
    db.get_availability_by_user([ 9 ])
      .then( (availability) => res.status(200).send(availability) )
      .catch( (error) => res.status(500).send(error) )
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    let { time_range, day, user_id, begin_time, end_time } = req.body;
    if (time_range === "2PM - 10PM") {
      begin_time = '14';
      end_time = '22';
    } else {
      begin_time = '6'
      end_time = '14'
    }
    // console.log(req.body);
    // console.log(time_range, day, user_id, begin_time, end_time);

    // Later 1 is gonna session user id
    db.update_availability([time_range, begin_time, end_time, day, user_id])
      .then( (availability) => res.status(200).json(availability) )
      .catch( (error) => res.status(500).send(error) )
  }
}