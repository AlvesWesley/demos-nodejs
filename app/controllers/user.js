const db = require('../../config/sequelize')
const bcrypt = require('bcryptjs')

module.exports.createUser = async (req, res) => {
  await db.User.create(req.body)
  res.redirect('/')
}

module.exports.createSession = async (req, res) => {
  // Busca o usuário correspondente ao e-mail usado no login
  const result = await db.User.findOne({ where: { email: req.body.email } })
  // Verifica se encontrou algum resultado
  if (result) {
    const user = result.dataValues
    // Compara o hash do banco com a senha digitada no formulário
    if (bcrypt.compareSync(req.body.password, user.password)) {
      // Se o hash bater a propriedade password e removida do objeto
      delete user.password
      // Os dados do usuário é gravado na sessão
      req.session.user = user
      // O usuário é redicionado para uma rota privada
      return res.redirect('/todos')
    }
    // Se senha incorreta, redireciona com parâmetro erro 1
    return res.redirect('/?erro=1')
  }
  // Se usuário não existe, redireciona com parâmetro erro 1
  res.redirect('/?erro=1')
}

module.exports.destroySession = async (req, res) => {
  // Remove a sessão do usuário
  req.session.destroy(() => res.redirect('/'))
}
