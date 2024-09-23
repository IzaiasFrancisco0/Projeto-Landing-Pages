const input = document.getElementById('switch');
const primeiraSecao = document.querySelector('.primeira-secao');
const secaoRodape = document.querySelector('.secao-rodape');

input.addEventListener('click', function(event) {
    const body = document.body;

    if(body.classList.contains('branco')){
      body.classList.remove('branco');
      primeiraSecao.classList.remove('borda')
        secaoRodape.classList.remove('borda')
    } else{
        body.classList.add('branco')
        primeiraSecao.classList.add('borda')
        secaoRodape.classList.add('borda')
    }
})

setTimeout(() => {
  const heading = document.querySelector('.primeira-secao h1');
  heading.classList.add('typing-finished');
}, 5000);

const iconeScroll = document.getElementById('icone-scroll');

iconeScroll.addEventListener('click', function(){
    document.querySelector('.segunda-secao').scrollIntoView({
        behavior: "smooth"
    })
})

// Função para verificar se o elemento está visível na tela (mesmo que parcialmente)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
    // Verifica se o elemento está visível vertical e horizontalmente (parcialmente ou totalmente)
    const isVisibleVertically = rect.top <= windowHeight && rect.bottom >= 0;
    const isVisibleHorizontally = rect.left <= windowWidth && rect.right >= 0;
  
    return isVisibleVertically && isVisibleHorizontally;
  }
  
  // Função que adiciona a classe "show" aos elementos quando visíveis
  function handleScroll() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Escuta o evento de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Executa uma verificação ao carregar a página
  handleScroll();
  
  const btnEnviar = document.getElementById("btn-enviar");

  document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Captura os valores dos campos
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('comment').value;
  
    // Validação dos campos
    if (name === '' || email === '' || message === '') {
      document.getElementById('responseMessage').innerText = 'Por favor, preencha todos os campos.';
      return;
    }
  
    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('responseMessage').innerText = 'Por favor, insira um email válido.';
      return;
    }
  
    // Enviar os dados via Formspree
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    fetch('https://formspree.io/f/meojbreo', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('responseMessage').innerText = 'Mensagem enviada com sucesso!';
        document.querySelector('.form').reset(); // Limpa o formulário
      } else {
        document.getElementById('responseMessage').innerText = 'Erro ao enviar a mensagem. Tente novamente.';
      }
    })
    .catch(error => {
      document.getElementById('responseMessage').innerText = 'Ocorreu um erro. Tente novamente.';
    });
  });
  

  const botoes = document.querySelectorAll('.btn-mostrar')



function mostrarMensagem(){
   botoes.forEach((el) => {
    el.addEventListener('click', () => {
      alert('Site em desenvolvimento !!')
    })
   })
}

mostrarMensagem()