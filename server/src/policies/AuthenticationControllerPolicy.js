const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
          })
          const { error } = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'you must provide a valide email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error:
                            `
                        The password provided falied to match the following rules:
                        <br>
                        1. It must contain only the following characters:lower case, upper case, numerics.
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters in lenght.
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}
