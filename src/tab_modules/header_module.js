
const createHeader = (container) => {

    //CRIA ELEMENTOS
    let header = document.createElement("header");
    let nav = document.createElement("nav");
    let spanTitulo = document.createElement("span");
    let spanMenu = document.createElement("span");
    let spanContact = document.createElement("span");

    //ATRIBUI IDS
    spanTitulo.id = "titulo";
    spanContact.id = "contato"
    spanMenu.id = "menuB";

    //COLOCA TEXTO
    spanTitulo.textContent = "MacLaren's";
    spanMenu.textContent = "Menu";
    spanContact.textContent = "Contato";

    //JUNTA OS ELEMENTOS
    header.appendChild(nav);

    nav.appendChild(spanTitulo);
    nav.appendChild(spanMenu);
    nav.appendChild(spanContact);

    container.appendChild(header);
}

export default createHeader;