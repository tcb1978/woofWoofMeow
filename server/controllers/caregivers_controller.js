module.exports = {
    getCaregiverJobs: (req, res, next) => {
        const db = req.app.get('db');

        db.get_caregiver_jobs([ req.session.user.user_id ]).then( jobs => {

            res.status(200).json(jobs);

        }).catch((error) => console.log(error))
    },

    getCaregiversJobsRequested: (req, res, next) => {
        const db = req.app.get('db');

        db.get_caregivers_jobs_requested([ req.session.user.user_id ]).then( jobs => { 

            res.status(200).json(jobs);

        }).catch( (error) => console.log(error) )
    },

    getCaregiversJobsInterested: (req, res, next) => {
        const db = req.app.get('db');

        db.get_caregivers_jobs_interested([ req.session.user.user_id ]).then( jobs => {

            res.status(200).json(jobs);

        }).catch( (error) => console.log(error) )
    }
}