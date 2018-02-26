require('dotenv').config();
const bcrypt = require ('bcrypt');
const saltRound = 12;
const axios = require('axios');

module.exports = {
  register: (req, res, next) => {
    const db = req.app.get('db');
    const { title } = req.body;
    // console.log('title ->', title);
    
    db.create_user_with_title([ title ])
      .then( user => {
        
        req.session.user.user_id = user[0].user_id;
        req.session.user.title = title;
        // console.log('req.session', req.session.user);

        res.status(200).json( req.session.user )
      })
      .catch(error => res.status(500).send(error))
  },

  login: (req, res, next) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    // console.log(req.body);
    db.find_user([email]) // need to create this sql file
      // we get the user whose email is matched with out request
      .then(users => {
        // checking if there is any user with this email
        if (users.length) {
          // comparing the password we have from the form and from the database
          bcrypt.compare(password, users[0].password).then( passwordMatch => {
            if (passwordMatch) {
              // if there is any match open the session and send status 200
              req.session.user = {
                user_id: users[0].user_id,
                first_name: users[0].first_name,
                last_name: users[0].last_name,
                street_address: users[0].street_address,
                state: users[0].state,
                city: users[0].city,
                zip: users[0].zip,
                email: users[0].email,
                phone: users[0].phone,
                avatar: users[0].avatar,
                title: users[0].title,
                longitude: users[0].longitude,
                latitude: users[0].latitude,
                about_message: users[0].about_message,
                proximity: users[0].proximity
              };
              res.status(200).json( req.session.user );
              // console.log(req);
              // res.status(200).json( users );
            } else {
              res.status(401).json({ message: 'Wrong password' })
            }
          })
          .catch( (error) => res.status(500).send(error) );
        }
        else {
          res.status(403).json({ message: "That user is not registered" });
        }
      })
    .catch( (error) => res.status(500).send(error) );
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send( 'Logged out' );
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_users([])
      .then( (users) => { res.status(200).json(users) })
      .catch( (error) => { res.status } )
  },

  getOne: (req, res, next) => {
    res.status(200).json( req.session.user );

    // const db = req.app.get('db');
    // const { id } = req.params;
    // db.get_user([id])
    //   .then(user => { res.status(200).json(user) })
    //   .catch(error => { res.status(500).json(error) })
  },


  update: (req, res, next) => {
    const db = req.app.get('db');
    console.log('req.body ', req.body);
    // console.log('session id', req.session.user );
    // we'll change longitude and latitude later so we need to declare it with let
    let { first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, longitude, latitude, about_message, proximity } = req.body;
    
    // getting longitude and latitude from api request based on zip code
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.WEATHER_API_KEY}`)
      // .then( (response) => {
        // changing values of longitude and latitude from req.body
        // longitude = response.data.coord.lon
        // latitude = response.data.coord.lat
        longitude = 12
        latitude = 15
        // making hashed password
        bcrypt.hash(password, saltRound)
        .then(hashedPassword => {
          if (title === 'caregiver') {
            db.update_user([ first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, hashedPassword, longitude, latitude, about_message, proximity, req.session.user.user_id ])
              .then( (user) => {
                req.session.user = {
                  user_id: user[0].user_id,
                  first_name: user[0].first_name,
                  last_name: user[0].last_name,
                  street_address: user[0].street_address,
                  state: user[0].state,
                  city: user[0].city,
                  zip: user[0].zip,
                  email: user[0].email,
                  phone: user[0].phone,
                  avatar: user[0].avatar,
                  title: user[0].title,
                  longitude: user[0].longitude,
                  latitude: user[0].latitude,
                  about_message: user[0].about_message,
                  proximity: user[0].proximity
                }
                res.status(200).json( req.session.user ) 
              })
              .catch( (error) => res.status(500).send(error))
          } else {
            db.update_user([first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, hashedPassword, longitude, latitude, about_message, proximity, req.session.user.user_id ])
                .then( (user) => {
                  // console.log('user ', user[0]);
                  req.session.user = {
                    user_id: user[0].user_id,
                    first_name: user[0].first_name,
                    last_name: user[0].last_name,
                    street_address: user[0].street_address,
                    state: user[0].state,
                    city: user[0].city,
                    zip: user[0].zip,
                    email: user[0].email,
                    phone: user[0].phone,
                    avatar: user[0].avatar,
                    title: user[0].title,
                    longitude: user[0].longitude,
                    latitude: user[0].latitude,
                    about_message: user[0].about_message,
                    proximity: user[0].proximity
                  }
                  // console.log('req.session.user ', req.session.user);
                  res.status(200).json( req.session.user ) 
                })
                .catch( (error) => res.status(500).send(error))
          }
        })
        .catch( error => res.status(500).send(error) )
      // })
      // .catch( (error) => res.status(500).send(error))
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');

    db.delete_user([ req.session.user.user_id ])
      .then( () => res.status(200).json('deleted') )
      .catch( (error) => res.status(500).send(error) );
  }
}