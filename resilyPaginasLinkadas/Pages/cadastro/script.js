function enviarCadastro() {
    // Obter dados do formulário
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
  
    // Criando objeto com os dados do formulário
    let dados = {
      nome: nome,
      email: email,
      senha: senha
    }
  
    // Enviar dados para o backend usando AJAX
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/users', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  
    xhr.onload = function () {
      if (xhr.status == 201) {
        alert('Cadastro realizado com sucesso!')
        window.location.href = "../calendario/index.html";
      } else {
        alert('Erro ao cadastrar. Tente novamente.')
      }
    }
  
    xhr.send(JSON.stringify(dados))
  }