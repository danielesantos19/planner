const menu = document.querySelectorAll('.inicio a[href^="#"]');

menu.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function rolagem(element){
    const id = element.getAttribute('href');
    return document.querySelector(id) .offsetTop;
}
function rolagemClicar(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;

   rolagemPosicao(to); 
}
function rolagemPosicao(to){
     window.scroll({
        top: to ,
        behavior:"smooth",
    });
}
