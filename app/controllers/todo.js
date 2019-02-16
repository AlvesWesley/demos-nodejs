// Importando o arquivo de conexão com o banco de dados
const db = require('../../config/sequelize')

module.exports.enables = async (req, res) => {
  // Busca as todos abertas que pertencem ao usuário logado
  const todos = await db.Todo.findAll({
    where: { status: true, user_id: req.session.user.id }
  })
  /**
   *
   * Renderiza o arquivo de template e passa a página que deve ser carregada
   * dentro do template. As todos são passadas dentro do objeto no segundo
   * parâmetro
   *
   */
  res.render('template', { page: 'todos', todos })
}

module.exports.completed = async (req, res) => {
  // Busca as todos concluídos que pertencem ao usuário logado
  const todos = await db.Todo.findAll({
    where: { status: false, user_id: req.session.user.id }
  })
  res.render('template', { page: 'completed', todos })
}

module.exports.create = async (req, res) => {
  // Coleta o id do usuário através da sessão antes de inserir o todo
  req.body.user_id = req.session.user.id
  await db.Todo.create(req.body)
  // Após a operação a requisição é redirecionada para o endereço de onde ela veio
  res.redirect('back')
}

module.exports.update = async (req, res) => {
  req.body.user_id = req.session.user.id
  await db.Todo.update(req.body, { where: { id: req.body.id } })
  res.redirect('back')
}

module.exports.destroy = async (req, res) => {
  await db.Todo.destroy({ where: { id: req.body.id } })
  res.redirect('back')
}
