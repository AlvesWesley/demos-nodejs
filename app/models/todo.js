module.exports = (sequelize, DataType) => {
  const Todo = sequelize.define('todos', {
    title: {
      type: DataType.STRING(30),
      allowNull: false
    },
    description: {
      type: DataType.STRING(200),
      allowNull: false
    },
    status: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  })

  return Todo
}
