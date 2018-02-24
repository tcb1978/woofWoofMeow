module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { caregiver_id, petowner_id, month, day, year, begin_time, end_time, request_status, service } = req.body;
    console.log(req.body);

    function convertTo24Hour(time) {
      var hours = parseInt(time.substr(0, 2));
      if (time.indexOf('am') != -1 && hours == 12) {
        time = time.replace('12', '0');
      }
      if (time.indexOf('pm') != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
      }
      return time.replace(/(am|pm)/, '');
    }

    function timeToDecimal(t) {
      t = t.split(':');
      return parseFloat(parseInt(t[0], 10) + parseInt(t[1], 10) / 60);
    }

    let convertedTime = timeToDecimal(convertTo24Hour(begin_time))

    const minutes = parseInt(service.split(' ')[0])
    let walkDurationInHours = 0
    if (minutes === 30) {
      walkDurationInHours = 0.5
    } else { walkDurationInHours = 1 }
    console.log('walkDurationInHours ', walkDurationInHours);
    const serviceTime = convertedTime + walkDurationInHours;

    db.create_job([ caregiver_id, petowner_id, month, day, year, begin_time, serviceTime, request_status, service ])
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