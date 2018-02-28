# WoofWalks.us

Dog walking appointment app

## Original idea:

Create a web-site that will connect pet owners to pet walkers.

## Client MVP:

* Clients (pet owner) can create a profile with their personal (and dog) information.
* Clients make a request for the walk based on included parameters. Information includes the type of walk (30 minutes walk, 60 minutes walk, 60 minutes dog park), proximity (max distance the walker lives from you), begin time, month and day. In the search results they see all the walkers that satisfy the condition and request the walk.
* When they make the request it goes to the caregiver (pet walker). Once the caregiver accepts it, they can start chatting.
* Clients can see check-in and check-out marks of the caregiver with geolocation.
* After the walk is over, client receives the photo with the dog from the walk.
* After that, the client can write a review on that person.

* Also, they can view reviews displayed on any caregiver profile.

* In the client (petwoner) profile, clients can update their profile information (addres, phone number, email) and dog information.

## Caregiver MVP:

* Caregivers can create a profile with their personal information.
* In their profile, caregivers can update their availability.
* They also can accept requests from the clients and chat with them.
* They check-in then check-out of the appontment with the geolocation and time-stamp. Upon 'checkout' the caregiver may update the client with a photo and details from the walk.
* The walk is considered as finished and the caregiver may continue on to any further appointments.

## Built with
* React - a framework for dynamic component side of the app
* Node.js - to execute JavaScript code on the server side
* Express.js - to handle server
* Redux - to let components share data
* axios and superagent - to handle requests between front-end and back-end servers
* PostgreSQL - database
* Massive.js - to handle connection between server and database
* bcrypt - to hash passwords
* Multer - to upload files
* Sass - for CSS
* AWS - to store images
* Dropzone - to upload files on the front end
* socket.io - to handle chat between users
* google maps api - to handle geolocation
