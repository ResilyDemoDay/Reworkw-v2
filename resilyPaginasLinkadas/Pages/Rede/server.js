document.addEventListener('DOMContentLoaded', function () {
  // Referencia os IDs do HTML
  const textarea = document.getElementById('novoPost')
  const compartilharBtn = document.getElementById('compartilharBtn')
  const boxContainer = document.getElementById('boxContainer')
  const postsContainer = document.getElementById('postsContainer')

  // Botão de compartilhar
  compartilharBtn.addEventListener('click', () => {
    // Obtém o texto da área de texto
    const postText = textarea.value

    // Verifica se o texto não está vazio
    if (postText.trim() !== '') {
      // Cria um novo post
      const newPost = createPostElement(postText)

      // Adiciona a nova postagem na div de postagens no início
      postsContainer.insertBefore(newPost, postsContainer.firstChild)

      // Limpa a área onde o texto foi escrito
      textarea.value = ''

      // Altera o tamanho da div de trás dos posts
      updateBoxHeight()

      // Envia os dados para o backend
      enviarParaBackEnd(postText)
    }
  })

  function enviarParaBackEnd(postText) {
    // Simples exemplo: dados a serem enviados (substitua com seus dados reais)
    const dados = {
      conteudo: postText,
      outroCampo: 'valor'
    }

    // Envia os dados usando fetch para o endpoint adequado
    fetch('https://reqres.in/api/users', {  //trocar para nosso servidor
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Post enviado com sucesso:', data)
      })
      .catch(error => {
        console.error('Erro ao enviar o post:', error)
      })
  }

  // Função para criar um novo post
  function createPostElement(text) {
    // Cria elementos HTML para o novo post
    const postDiv = document.createElement('div')
    postDiv.classList.add('post')

    const perfilPostDiv = document.createElement('div')
    perfilPostDiv.classList.add('perfilPost')

    // Adiciona a foto de perfil, o nome e a data
    perfilPostDiv.innerHTML = `
        <img src="./img/user.png" alt="">
        <div class="usuarioData">
          <h2 class="nomePerfil">Nome da Mamãe</h2>
          <h4 class="dataPost">${getCurrentDate()}</h4>
        </div>
      `

    const espacoPostDiv = document.createElement('div')
    espacoPostDiv.classList.add('espacoPost')

    // Adiciona o conteúdo do post
    const conteudoPostP = document.createElement('p')
    conteudoPostP.classList.add('conteudoPost')
    conteudoPostP.textContent = text

    // Adiciona o novo post ao div que já existe
    espacoPostDiv.appendChild(conteudoPostP)
    postDiv.appendChild(perfilPostDiv)
    postDiv.appendChild(espacoPostDiv)

    return postDiv
  }

  // Altera o tamanho da div
  function updateBoxHeight() {
    const postsHeight = postsContainer.offsetHeight
    boxContainer.style.height = `${postsHeight}px`
  }

  // Coloca a data no formato dia/mês/ano
  function getCurrentDate() {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    return `${day}/${month}/${year}`
  }
})
