module.exports = {
  getCaregiverJobs: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_caregiver_jobs([ id ])
      .then((jobs) => res.status(200).json(jobs))
      .catch((error) => console.log(error))
  },

  getCaregiverJobsRequested: (req, res, next) => {
      const db = req.app.get('db');

      db.get_caregivers_jobs_requested([])
        .then( (jobs) => res.status(200).json(jobs) )
        .catch( (error) => console.log(error) )
    },

  getCaregiversJobsInterested: (req, res, next) => {
      const db = req.app.get('db');

      db.get_caregivers_jobs_interested([])
        .then( (jobs) => res.status(200).json(jobs) )
        .catch( (error) => console.log(error) )
    }
}