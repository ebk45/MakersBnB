const User = require('../models').User

module.exports = {
  create (req, res) {
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list (req, res) {
    return User
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
  retrieve (req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user not found'
          })
        }
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error))
  },
  delete (req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'user not found'
          })
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error))
      })
      .catch((error) => res.status(400).send(error))
  },
  update (req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user not found'
          })
        }
        return user
          .update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            phone: req.body.phone || user.phone
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error))
      })
      .catch((error) => res.status(400).send(error))
  }
}
