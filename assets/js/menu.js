
// ABRIR MENU RESPONSIVO

var menu = document.querySelector('.cabecalho__responsivo');
var botaoAbrir = document.querySelector('.menu__abrir')



botaoAbrir.addEventListener('click' , function(){
   menu.classList.add('abre__menu')
})

// FECHAR MENU 

var botaoFechar = document.querySelector('.fechar__menu')

botaoFechar.addEventListener('click' , function(){
    menu.classList.remove('abre__menu')
})

// CLICAR FORA DO MENU E RETORNAR A PAGINA



document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('abre__menu');
    }
};