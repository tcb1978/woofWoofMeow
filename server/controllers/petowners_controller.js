module.exports = {
  getPetownerJobs: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_petowner_jobs([id])
      .then((jobs) => res.status(200).json(jobs))
      .catch((error) => console.log(error))
  },

  getPetownersJobsRequested: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowners_jobs_requested([])
      .then( (jobs) => res.status(200).json(jobs) )
      .catch( (error) => console.log(error) )
  },

  getPetownersJobsInterested: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowners_jobs_interested([])
      .then( (jobs) => res.status(200).json(jobs) )
      .catch( (error) => console.log(error) )
  }
}