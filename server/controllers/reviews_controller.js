module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, message, rating, job_id } = req.body;

    db.create_review([user_id, message, rating, job_id])
      .then( (review) => res.status(200).json(review) )
      .catch( (error) => res.status(500).send(error) )
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');
    
    db.get_all_reviews([])
      .then( (reviews) => res.status(200).json(reviews) )
      .catch( (error) => res.status(500).send(error) )
  },

  getReviewsForCaregiver: (req, res, next) => {
    const db = req.app.get('db');
    const { caregiver_id } = req.params;

    // Later 1 is gonna session user id
    // right now we are getting it by user id. is it gonna be caregiver id or petowner id
    db.get_reviews_by_user([caregiver_id])
      .then( (reviews) => res.status(200).json(reviews) )
      .catch( (error) => res.status(500).send(error) )
  }
}