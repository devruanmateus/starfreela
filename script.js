/* Script para acessar o menu de usuário ao clicar na foto de perfil */
let menuUser = document.querySelector('#user-menu'); // Seletor do menu

function openMenuUser() {
    // Verifica o estado atual do menu
    if (menuUser.style.display === 'block') {
        menuUser.style.display = 'none'; // Se o menu estiver visível, esconde-o
    } else {
        menuUser.style.display = 'block'; // Se o menu estiver oculto, mostra-o
    }
}