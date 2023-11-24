let topo = document.getElementById('topo');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > header.offsetHeight) {
        topo.style.position = 'fixed'; // Mantém o #topo fixo
        topo.style.top = '0'; // Alinha no topo da janela
        topo.style.left = '0'; // Alinha à esquerda
        topo.style.right = '0'; // Alinha à direita
        topo.style.zIndex = '999'; // Certifica-se de que ele aparece acima de outros elementos
    } else {
        topo.style.position = 'relative'; // Volta ao fluxo normal do documento
        topo.style.zIndex = 'auto'; // Volta à ordem de empilhamento padrão
    }
})
