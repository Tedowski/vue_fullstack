const Joi = require('@hapi/joi')

const schema = {
    email: Joi.string().email(),
    password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
    )
}

module.exports = {
    register (req, res, next) {

        const {error} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match following rules:
                        <br>
                        1. Password must contain only lowercase and uppsercase letters and numerics
                        <br>
                        2. Must be between 8 and 32 (including) characters long
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration info'
                    })
            }
        } else {
            next()
        }
    }
}
