module.exports = {
  getPetownerJobs: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowner_jobs([ req.session.user.user_id ]).then( jobs => {

      console.log( 'Jobs', jobs );
      res.status(200).json(jobs)

    }).catch((error) => console.log(error))
  },

  getPetownersJobsRequested: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowners_jobs_requested([ req.session.user.user_id ]).then( jobs => {

      res.status(200).json(jobs);

    }).catch( (error) => console.log(error) )
  },

  getPetownersJobsInterested: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowners_jobs_interested([ req.session.user.user_id ]).then( jobs => {
      
      res.status(200).json(jobs);

    }).catch( (error) => console.log(error) )
  }
}