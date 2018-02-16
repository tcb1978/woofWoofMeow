module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, comments, month, day, year, begin_time, end_time, am_pm, animal_id, request_status, thirty_minute_service, sixty_minute_service, sixty_minute_park_service  } = req.body;
    console.log(req.body);

    db.create_job([ user_id, comments, month, day, year, begin_time, end_time, am_pm, animal_id, request_status, thirty_minute_service, sixty_minute_service, sixty_minute_park_service ])
      .then( (job) => res.status(200).json(job) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');
    
    db.get_all_jobs([])
      .then( (jobs) => res.status(200).json(jobs))
      .catch( (error) => res.status(500).send(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    // Later 1 is gonna session user id
    db.get_job([ id, 1 ])
      .then( (job) => res.status(200).json(job) )
      .catch( (error) => res.status(500).send(error) )
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log(id);

    db.delete_job([ id ])
      .then( () => res.status(200).json('deleted') )
      .catch( (error) => res.status(500).send(error) )
  }
}