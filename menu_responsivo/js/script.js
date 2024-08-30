function menuShow() {
    // Seleciona o elemento com a classe 'mobile-menu'
    let menuMobile = document.querySelector('.mobile-menu');
    // Verifica se o menu móvel possui a classe 'open'
    if (menuMobile.classList.contains('open')) {
    // Se possui a classe 'open', remove-a para ocultar o menu
    menuMobile.classList.remove('open');
    // Muda o ícone para o ícone de menu (menu_white_36dp.svg)
    document.querySelector('.icon').src =
    "/menu_responsivo/img/menu_white_36dp.svg";
    } else {
    // Se não possui a classe 'open', adiciona-a para exibir o menu
    menuMobile.classList.add('open');
    // Muda o ícone para o ícone de fechamento (close_white_36dp.svg)
    document.querySelector('.icon').src =
    "/menu_responsivo/img/close_white_36dp.svg";
    }
}