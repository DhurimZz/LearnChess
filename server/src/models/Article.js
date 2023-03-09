module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description cannot be null'
        },
        notEmpty: {
          msg: 'Description cannot be empty'
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'URL cannot be null'
        },
        notEmpty: {
          msg: 'URL cannot be empty'
        },
        isUrl: {
          msg: 'URL must be a valid URL'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image cannot be null'
        },
        notEmpty: {
          msg: 'Image cannot be empty'
        },
        isUrl: {
          msg: 'Image must be a valid URL'
        }
      }
    }
  })
  return Article
}
