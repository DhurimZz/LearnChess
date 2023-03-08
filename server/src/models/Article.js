
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  })
  return Article
}
