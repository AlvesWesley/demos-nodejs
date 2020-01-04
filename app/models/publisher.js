'use strict'

module.exports = (sequelize, DataTypes) => {
  const { Model } = DataTypes

  class Publisher extends Model {}

  Publisher.init(
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
      modelName: 'publisher',
      tableName: 'publishers'
    }
  )

  Publisher.associate = models => {
    Publisher.hasMany(models.Book, {
      foreignKey: 'publisherId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Publisher
}
