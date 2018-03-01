module.exports = {
    getJobs: (req, res, next) => {
        const db = req.app.get('db');

        db.get_caregiver_jobs([ req.session.user.user_id ]).then( jobs => {

            res.status(200).json(jobs);

        }).catch((error) => console.log(error))
    },

    getJobsRequested: (req, res, next) => {
        const db = req.app.get('db');

        db.get_caregiver_jobs_requested([ req.session.user.user_id ]).then( jobs => { 

            res.status(200).json(jobs);

        }).catch(error => console.log(error));
    },

    getJobsAccepted: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_caregiver_jobs_accepted([ req.session.user.user_id ]).then( jobs => {

            res.status(200).json(jobs);

        }).catch(error => console.log(error));
    },

    getJobHistory: (req, res, next) => {
        const db = req.app.get('db');
    
        db.get_caregiver_job_history([ req.session.user.user_id ]).then( jobs => {

            res.status(200).json(jobs);

        }).catch(error => console.log(error));
    },

    checkin: (req, res, next) => {
        const db = req.app.get('db');
        const { job_id } = req.params;

        const date = new Date();
        const hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const ampm = hrs < 12 ? 'am' : 'pm';
        const time = `${hrs}:${mins} ${ampm}`;

        db.update_job_checkin([ job_id, time ]).then( checkinTime => {

            res.status(200).json(checkinTime);

        }).catch( (error) => console.log(error) )
    },

    checkout: (req, res, next) => {
        const db = req.app.get('db');
        const { job_id } = req.params;

        const date = new Date();
        const hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const ampm = hrs < 12 ? 'am' : 'pm';
        const time = `${hrs}:${mins} ${ampm}`;

        db.update_job_checkout([ job_id, time ]).then( checkoutTime => {

            res.status(200).json(checkoutTime);

        }).catch( (error) => console.log(error) )
    }
}