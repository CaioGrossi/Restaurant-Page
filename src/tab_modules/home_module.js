

const createHomeHtml = (contanainer) => {
    
    //CRIA OS ELEMENTOS
    let sectionSobre = document.createElement("section");

    //ATRIBUI IDS
    sectionSobre.id = "sobre";

    //COLOCA OS TEXTOS
    sectionSobre.textContent =  "O MacLaren's Pub é o ambiente principal da série How I Met Your Mother (e onde aconteceas melhores cenas também). Os personagens sempre se encontram lá, inclusive foi onde Ted, Marshall e Lily conheceram Barney e depois Robin. É um lugar iconico da série e que todo fã com certeza sabe a ambientação de cor. O cardápio nao é muito variado, sendo 80% das vezes resumido em cerveja e algumas vezes um hamburguer ou algumas asinhas de frango empanadas."

    //JUNTA OS ELEMENTOS
    contanainer.appendChild(sectionSobre);
    
}

export default createHomeHtml;