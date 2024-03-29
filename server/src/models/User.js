const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SALT_FACTOR = 8

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: String
})

UserSchema.pre('save', function (next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
