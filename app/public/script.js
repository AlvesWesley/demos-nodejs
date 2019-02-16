$(document).ready(function() {
  // Recursos do Materialize
  $('.collapsible').collapsible()
  $('.modal').modal()
  $('.sidenav').sidenav()

  /**
   *
   * Ações dos botoões
   *
   */

  // Adicionar todo
  $('#btn-create').click(function() {
    $('#form-create').attr('action', '/todos/create')
    clearForm()
  })

  // Alterar status da todo
  $('.btn-status').click(function() {
    const id = $(this).data('id')
    const status = $(this).data('status')
    $('#status-id').val(id)
    $('#status-status').val(status)
  })

  // Editar todo
  $('.btn-edit').click(function() {
    $('#form-create').attr('action', '/todos/update')
    const id = $(this).data('id')
    const title = $(this).data('title')
    const description = $(this).data('description')
    $('#id').val(id)
    $('#title').val(title)
    $('#description').val(description)
  })

  // Excluir todo
  $('.btn-delete').click(function() {
    const id = $(this).data('id')
    $('#delete-id').val(id)
  })

  // Limpar formulário
  function clearForm() {
    $('#id').val('')
    $('#title').val('')
    $('#description').val('')
  }
})
