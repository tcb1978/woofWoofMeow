const bcrypt = require ('bcrypt');
const saltRound = 12;

module.exports = {
  // register: (req, res, next) => {
  //   const db = req.app.get('db');
  //   console.log(req.body);
  //   // const {first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, longitude, latitude, about_message, proximity_defenition} = req.body;
  //   const { title } = req.body
  //   bcrypt.hash(password, saltRound)
  //   .then(hashedPassword => {
  //     // need to create this sql file
  //     db.create_user([ first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, hashedPassword, longitude, latitude, about_message, proximity_defenition ])
  //     .then((user) => {
  //       // req.session.user = { email };
  //       // res.json({ user: req.session.user });
  //       res.status(200).json(user)
  //     }).catch((error) => {
  //       console.log('error ', error);
  //       res.status(500).json({ message: 'Something bad happened!' })
  //     })
  //   })
  //   .catch( (error) => res.status(500).send(error) )
  // },

  register: (req, res, next) => {
    const db = req.app.get('db');
    const { title } = req.body;
    console.log(title);
    
    db.create_user_with_title([ title ])
      .then((user) => {
        res.status(200).json(user)
      })
      .catch(error => res.status(500).send(error))
  },

  login: (req, res, next) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    console.log(req.body);
    db.get_user([email]) // need to create this sql file
      // we get the user whose email is matched with out request
      .then(users => {
        // checking if there is any user with this email
        if (users.length) {
          // comparing the password we have from the form and from the database
          bcrypt.compare(password, users[0].password).then(passwordMatch => {
            if (passwordMatch) {
              // if there is any match open the session and send status 200
              req.session.user = {
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
                proximity_defenition: users[0].proximity_defenition
              };
              res.status(200).json({ user: req.session.user });
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
    res.status(200).send();
  },

  getAll: (req, res, next) => {
    const db = req.app.get('db');

    db.get_all_users([])
      .then( (users) => { res.status(200).json(users) })
      .catch( (error) => { res.status } )
  },

  getOne: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log(req.body);

    db.get_user([id])
      .then(user => { res.status(200).json(user) })
      .catch(error => { res.status(500).json(error) })
  },

  update: (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.body);
    const { first_name, last_name, street_address, state, city, zip, phone, avatar, title, longitude, latitude, about_message, proximity_defenition } = req.body;
    
    // Later 1 is gonna session user id
    db.update_user([first_name, last_name, street_address, state, city, zip, phone, avatar, title, longitude, latitude, about_message, proximity_defenition, 1])
      .then( (user) => res.status(200).json(user) )
      .catch( (error) => res.status(500).send(error))
  },

  destroy: (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.params);
    const { id } = req.params;
    console.log(id);

    // for now we have to pass the id of the user we want to delete as a parameter
    // later its' gonna be user session id
    db.delete_user([ id ])
      .then( () => res.status(200).json('deleted') )
      .catch( (error) => res.status(500).send(error) );
  }
}