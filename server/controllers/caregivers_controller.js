module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_caregivers([])
      .then( (caregivers) => res.status(200).json(caregivers) )
      .catch( (error) => res.status(500).send(error) )
  },

  getFiltered: (req, res, next) => {
    const db = req.app.get('db');
    let { time, proximity } = req.query;
    console.log(time, proximity);
    let proximityNum = proximity.split(' ')[0]
    console.log(proximityNum);

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

    let convertedTime = timeToDecimal(convertTo24Hour(time))
    console.log(convertedTime)
    
    db.get_filtered([ convertedTime, proximityNum ])
      .then( (caregivers) => res.status(200).json(caregivers) )
      .catch( error => console.log(error) )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_caregiver([ id ])
      .then( (caregiver) => res.status(200).json(caregiver) )
      .catch( (error) => res.status(500).send(error) );
  }
}