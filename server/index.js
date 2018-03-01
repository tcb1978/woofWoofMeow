const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
// const socket = require('socket.io');
require('dotenv').config();
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();

app.use(bodyParser.json());
// app.use( cors() );

// AWS declare
// AWS.config.update should be above declaring s3 variable.
// Use region only if you want to get something from AWS.
// See https://stackoverflow.com/a/26284339/5184474
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
});
const s3 = new AWS.S3();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 52428800
  }
})
// AWS Upload
app.post('/api/upload', upload.single('avatar'), (req, res) => {
  var params = {
    Bucket: process.env.BUCKET,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: "image/png",
    ACL: 'public-read'
  }
  // s3.putObject() puts the image to the AWS bucket. If the file is already there
  // it won't give any error, just make view that file is uploaded again though
  // it just checked if it's in there
  s3.putObject(params, (err) => {
    console.log(err);
    if (err) return res.status(400).send(err);
  })
  var imageUrl = 'https://s3-us-west-1.amazonaws.com/' + params.Bucket + '/' + params.Key
  res.status(200).send(imageUrl);
})

// Middlewares
const checkForSession = require('./middlewares/checkForSession');

// Connecting our .env variable
massive( process.env.CONNECTION_STRING )
  .then( db => app.set('db', db) )
  .catch( (error) => console.log(error));

// Session initialization
app.use( session({
  secret: process.env.SECRET_KEY,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}));
app.use( checkForSession );

// Controllers
const users_controller = require('./controllers/users_controller');
const search_controller = require('./controllers/search_controller');
const petowners_controller = require('./controllers/petowners_controller');
const caregivers_controller = require('./controllers/caregivers_controller');
const animals_controller = require('./controllers/animals_controller');
const availability_controller = require('./controllers/availability_controller');
const jobs_controller = require('./controllers/jobs_controller');
const reviews_controller = require('./controllers/reviews_controller');
const googleMaps_controller = require('./controllers/googleMaps_controller');
const stripe_controller = require('./controllers/stripe_controller');

// Users management
app.post('/register', users_controller.register);
app.post('/login', users_controller.login);
app.post('/logout', users_controller.logout);
app.get('/user', users_controller.getOne);
app.get('/users', users_controller.getAll);
app.put('/update/user', users_controller.update);
app.put('/update/profile', users_controller.updateProfile);
app.delete('/delete/user', users_controller.destroy);

// Search management
app.get('/caregivers/search', search_controller.getFiltered);

// Petowners management
app.get('/petowner/jobs', petowners_controller.getJobs);
app.get('/petowner/jobs/requested', petowners_controller.getJobsRequested);
app.get('/petowner/jobs/accepted', petowners_controller.getJobsAccepted);
app.get('/petowner/jobs/history', caregivers_controller.getJobHistory);

// Caregivers management
app.get('/caregiver/jobs', caregivers_controller.getJobs);
app.get('/caregiver/jobs/requested', caregivers_controller.getJobsRequested);
app.get('/caregiver/jobs/accepted', caregivers_controller.getJobsAccepted);
app.get('/caregiver/jobs/history', caregivers_controller.getJobHistory);
app.put('/caregiver/jobs/:job_id/checkin', caregivers_controller.checkin);
app.put('/caregiver/jobs/:job_id/checkout', caregivers_controller.checkout);

// Animals management
app.post('/create/animal', animals_controller.create);
app.get('/animals', animals_controller.getUserAnimals);
app.get('/animal/:petowner_id', animals_controller.getOne);
app.put('/update/animal/:id', animals_controller.update); // :id parameter is the animal id (don't take it off)
app.delete('/delete/animal/:id', animals_controller.destroy); // :id parameter is the animal id (don't take it off)

// Availability management
app.post('/create/available', availability_controller.create);
app.get('/available', availability_controller.getAll);
app.get('/available/user', availability_controller.getUserAvailability);
app.put('/update/available', availability_controller.update);

// Jobs management
app.post('/create/job', jobs_controller.create);
app.get('/jobs', jobs_controller.getAll);
app.get('/job', jobs_controller.getOne);
app.put('/update/job/:id', jobs_controller.update); // :id is the job id (don't take it off)
app.delete('/delete/job/:id', jobs_controller.destroy); // :id is the job id (don't take it off)

// Reviews management
app.post('/create/review', reviews_controller.create);
app.get('/reviews', reviews_controller.getAll);
app.get('/reviews/:caregiver_id', reviews_controller.getReviewsForCaregiver); // read comment in the controller (don't take off :id)

// Geolocation
app.get('/location/user', googleMaps_controller.getUserlocation);
app.get('/location', googleMaps_controller.getlocation);

// Stripe
app.post('/save-stripe-token', stripe_controller.paymentApi);

const port = process.env.PORT || 3050;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );

// io = socket(server);

// io.on('connection', (socket) => {
//   console.log(socket.id);
//   // listens for the message 
//   socket.on('SEND_MESSAGE', function(data){
//     io.emit('RECEIVE_MESSAGE', data);
//   })
// });