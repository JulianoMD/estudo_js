let area = document.querySelector('#area');
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar() {
    area.innerText = 'Clicou!';
    area.style.background = 'red'
}
function entrar() {
    area.innerText = 'Entrou!';
    area.style.background = 'yellow'
}
function sair() {
    area.innerText = 'Saiu!';
    area.style.background = 'green'
}