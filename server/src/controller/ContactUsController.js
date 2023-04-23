const { ContactUs } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const contactus = await ContactUs.findAll()
            res.send(contactus)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to fetch the contactus.'
            })
        }
    },
    async post (req, res) {
        try {
            const contactus = await ContactUs.create(req.body)
            res.send(contactus)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to create the contactus.'
            })
        }
    },
    async delete (req, res) {
        try {
          const { contactusId } = req.params
          const deletedCount = await ContactUs.destroy({
            where: { id: contactusId }
          })
          if (deletedCount === 0) {
            return res.status(404).send({
              error: 'ContactUs not found'
            })
          }
          res.send({ message: 'ContactUs deleted successfully' })
        } catch (err) {
          console.error(err)
          res.status(500).send({
            error: 'An error occurred while deleting the ContactUs'
          })
        }
      }
}
