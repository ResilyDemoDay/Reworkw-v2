
document.addEventListener('DOMContentLoaded', function () {
   //referencia os ID's do html
    const textarea = document.getElementById('novoPost');
    const compartilharBtn = document.getElementById('compartilharBtn');
    const boxContainer = document.getElementById('boxContainer');
    const postsContainer = document.getElementById('postsContainer');

    //botao de compartilhar
    compartilharBtn.addEventListener('click', () => {
        // Get the text from the textarea
        const postText = textarea.value;

       //vê se o texto nao está vazio
        if (postText.trim() !== '') {
            // cria um novo post
            const newPost = createPostElement(postText);

            // Adicionar a nova postagem na div de postagens no início
            postsContainer.insertBefore(newPost, postsContainer.firstChild);

            // Limpa a área que o texto foi escrito
            textarea.value = '';

            // Altera o tamanho da box de traz dos posts
            updateBoxHeight();
        }
    });

    // Função pra criar um novo post
    function createPostElement(text) {
        // Create HTML elements for the new post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const perfilPostDiv = document.createElement('div');
        perfilPostDiv.classList.add('perfilPost');

        // Adciciona a foto de perfil, o nome e a data
        perfilPostDiv.innerHTML = `
            <img src="./img/perfil.png" alt="">
            <div class="usuarioData">
                <h2 class="nomePerfil">Nome da Mamãe</h2>
                <h4 class="dataPost">${getCurrentDate()}</h4>
            </div>
        `;

        const espacoPostDiv = document.createElement('div');
        espacoPostDiv.classList.add('espacoPost');

        // Adiciona o conteúdo do post
        const conteudoPostP = document.createElement('p');
        conteudoPostP.classList.add('conteudoPost');
        conteudoPostP.textContent = text;

        // adicionar o novo post ao div que já existe
        espacoPostDiv.appendChild(conteudoPostP);
        postDiv.appendChild(perfilPostDiv);
        postDiv.appendChild(espacoPostDiv);

        return postDiv;
    }

    // Altera o tamanho da div
    function updateBoxHeight() {
        const postsHeight = postsContainer.offsetHeight;
        boxContainer.style.height = `${postsHeight}px`;
    }

    // Coloca a data no formato dia/mes/ano
    function getCurrentDate() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
});