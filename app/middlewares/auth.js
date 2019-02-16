module.exports = (req, res, next) => {
  // Verifica se existe uma sessão estabelecida
  if (!req.session.user) {
    // Se não existir, retorna status code 403
    return res.status(403).redirect('/')
  }
  // Se existir o middleware deixa a requisição continuar
  next()
}
