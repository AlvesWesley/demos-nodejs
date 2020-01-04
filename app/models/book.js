'use strict'

module.exports = (sequelize, DataTypes) => {
  const { Model } = DataTypes

  class Book extends Model {}

  Book.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      isbn: DataTypes.STRING(13),
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      pages: DataTypes.INTEGER,
      status: DataTypes.ENUM('not_read', 'reading', 'read'),
      authorId: DataTypes.UUID,
      publisherId: DataTypes.UUID
    },
    {
      sequelize,
      modelName: 'book',
      tableName: 'books'
    }
  )

  Book.associate = models => {
    Book.belongsTo(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    Book.belongsTo(models.Publisher, {
      foreignKey: 'publisherId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Book
}
