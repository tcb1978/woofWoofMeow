module.exports = {
  getCaregiverJobs: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_caregiver_jobs([ id ])
      .then((jobs) => res.status(200).json(jobs))
      .catch((error) => console.log(error))
  },

  getCaregiversJobsRequested: (req, res, next) => {
      const db = req.app.get('db');
      const { id } = req.params;

      db.get_caregivers_jobs_requested([id])
        .then( (jobs) => res.status(200).json(jobs) )
        .catch( (error) => console.log(error) )
    },

  getCaregiversJobsInterested: (req, res, next) => {
      const db = req.app.get('db');
      const { id } = req.params;

      db.get_caregivers_jobs_interested([id])
        .then( (jobs) => res.status(200).json(jobs) )
        .catch( (error) => console.log(error) )
    }
}