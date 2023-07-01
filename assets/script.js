const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  console.log("click");
  sidebar.classList.toggle('active');
});
//
document.addEventListener('click', (event) => {
  const target = event.target;
  const isMenuOpen = sidebar.classList.contains('active');

  // Verifica se o clique ocorreu dentro ou fora do menu
  if (isMenuOpen && !target.closest('.sidebar') && !target.closest('.menu-toggle')) {
    sidebar.classList.remove('active');
  }
});


//Fomulario
const form = document.querySelector("#form");
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email");
const textareaMensagem = document.querySelector("#mensagem");

form.addEventListener("submit", (event =>{
    event.preventDefault();

    if(inputName.value === "") {
        alert("Escreva seu nome!");
        return;
    }

    if(inputEmail.value === "" || !isEmailValid(inputEmail.value)) {
        alert("Por favor prehencha seu email");
        alert("Seu email deve ter o formato fulano@domio.com")
        return;
    }

    if(textareaMensagem.value === "") {
        alert("Escreva sua mendagem!")
    }

    form.submit();
}));

const isEmailValid = (email) => {
    
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    )

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}