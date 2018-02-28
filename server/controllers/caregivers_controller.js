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
    },

    checkin: (rq, res, next) => {
        // `/caregiver/jobs/${this.props.job.job_id}/checkin`
        const db = req.app.get('db');
        const { checkout_time } = req.body;
        const { job_id } = req.params;

        db.update_job_checkin([ job_id, checkin_time ]).then( time => {

            res.status(200).json(time);

        }).catch( (error) => console.log(error) )
    },

    checkout: (req, res, next) => {
        const db = req.app.get('db');
        const { checkout_time } = req.body;
        const { job_id } = req.params;

        db.update_job_checkout([ job_id, checkout_time ]).then( time => {

            res.status(200).json(time);

        }).catch( (error) => console.log(error) )
    }
}