module.exports = {
  getJobs: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowner_jobs([ req.session.user.user_id ]).then( jobs => {

      console.log( 'Jobs', jobs );
      res.status(200).json(jobs)

    }).catch((error) => console.log(error))
  },

  getJobsRequested: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowner_jobs_requested([ req.session.user.user_id ]).then( jobs => {

      res.status(200).json(jobs);

    }).catch( (error) => console.log(error) )
  },

  getJobsAccepted: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowner_jobs_accepted([ req.session.user.user_id ]).then( jobs => {

      res.status(200).json(jobs);

    }).catch( (error) => console.log(error) )
  },

  getJobHistory: (req, res, next) => {
    const db = req.app.get('db');

    db.get_petowner_job_history([ req.session.user.user_id ]).then( jobs => {

        res.status(200).json(jobs);

    }).catch(error => console.log(error));
  },
}