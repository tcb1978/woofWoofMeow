#WoofWalking.us

Dog walking app

##Original idea:

Create a web-site that will connect the pet owners and pet walkers.

##Client MVP:

*Clients (pet owner) can create a profile with their personal information and dog information.
*Clients can make a request for the walk where they put the information (description) about the walking. Information includes the type of walk (30 minutes walk, 60 minutes walk, 60 minutes dog park), proximity (max distance the walker lives from you), begin time, month and day. In the search results they see all the walkers that satisfy the condition and request the walk.
*When they make the request it goes to the caregiver (pet walker). Once the caregiver accepts it, they can start chatting.
*Clients can see check-in and check-out marks of the caregiver with geolocation.
*After the walk is over, client receives the photo with the dog from the walk.
*After that, the client can write a review on that person.

*Also, they can see the reviews for any caregivers

*In the profile, clients can update their profile information (addres, phone number, email) and dog information.

##Caregiver MVP:

*Caregivers can create a profile with their personal information.
*In their profile, caregivers can update their availability.
*They also can accept requests from the clients and chat with them.
*They start of finish the walk they check-in or check-out with the geolocation. Also, after the walk they have to send the photo of the dog during walk.
*After that, the walk is considered as finished and they can go to the next one.

##Built with
*React - a framework for dynamic component side of the app
*Node.js - to execute JavaScript code on the server side
*Express.js - to handle server
*Redux - to let components share data
*axios and superagent - to handle requests between front-end and back-end servers
*PostgreSQL - database
*Massive.js - to handle connection between server and database
*bcrypt - to hash passwords
*Multer - to upload files
*Sass - for CSS
*AWS - to store images
*Dropzone - to upload files on the front end
*socket.io - to handle chat between users
*google maps api - to handle geolocation