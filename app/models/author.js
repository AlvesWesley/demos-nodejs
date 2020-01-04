'use strict'

module.exports = (sequelize, DataTypes) => {
  const { Model } = DataTypes

  class Author extends Model {}

  Author.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'author',
      tableName: 'authors'
    }
  )

  Author.associate = models => {
    Author.hasMany(models.Book, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Author
}
