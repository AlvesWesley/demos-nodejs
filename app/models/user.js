const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    'users',
    {
      email: {
        type: DataType.STRING(50),
        allowNull: false
      },
      password: {
        type: DataType.STRING(60)
      }
    },
    {
      create_at: false,
      update_at: false
    }
  )

  User.addHook('beforeCreate', user => {
    return (user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync()
    ))
  })

  return User
}
