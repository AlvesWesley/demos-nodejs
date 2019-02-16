// O método render() renderiza arquivos de views

module.exports.login = (req, res) => {
  // Caso receba o valor 1 no parâmetro erro da URL, erro recebe true
  const erro = req.query.erro === '1'
  // Caso seja true, a interface mostra uma mensagem de erro na tela
  res.render('login', { erro })
}

module.exports.subscribe = (_, res) => {
  res.render('subscribe')
}
