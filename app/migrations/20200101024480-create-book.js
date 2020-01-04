'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      isbn: {
        type: Sequelize.STRING(13),
        allowNull: true,
        unique: true
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      status: {
        type: Sequelize.ENUM('not_read', 'reading', 'read'),
        allowNull: false,
        defaultValue: 'not_read'
      },
      authorId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'authors', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      publisherId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'publishers', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  down: queryInterface => {
    return queryInterface.dropTable('books')
  }
}
