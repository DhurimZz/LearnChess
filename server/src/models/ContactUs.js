module.exports = (sequelize, DataTypes) => {
    const ContactUs = sequelize.define('ContactUs', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Title cannot be null'
                },
                notEmpty: {
                    msg: 'Title cannot be empty'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Email cannot be null'
                },
                notEmpty: {
                    msg: 'Email cannot be empty'
                },
                isEmail: {
                    msg: 'Email must be valid'
                }
            }
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Message cannot be null'
                },
                notEmpty: {
                    msg: 'Message cannot be empty'
                }
            }
        }
    })
    return ContactUs
}
