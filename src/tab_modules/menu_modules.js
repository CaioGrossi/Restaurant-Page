
const createMenuHtml = (container) => {

    //CRIA ELEMENTOS
    let menu = document.createElement("section");

    let produto1 = document.createElement("div");
    let produto2 = document.createElement("div");
    let produto3 = document.createElement("div");
    let produto4 = document.createElement("div");
    let produto5 = document.createElement("div");
    let produto6 = document.createElement("div");

    let imgProduto1 = document.createElement("img");
    let imgProduto2 = document.createElement("img");
    let imgProduto3 = document.createElement("img");
    let imgProduto4 = document.createElement("img");
    let imgProduto5 = document.createElement("img");
    let imgProduto6 = document.createElement("img");

    let textoProduto1 = document.createElement("p");
    let textoProduto2 = document.createElement("p");
    let textoProduto3 = document.createElement("p");
    let textoProduto4 = document.createElement("p");
    let textoProduto5 = document.createElement("p");
    let textoProduto6 = document.createElement("p");

    //ATRIBUI IDS OU CLASSES
    menu.id = "menu"

    imgProduto1.classList.add("imgProduto");
    imgProduto2.classList.add("imgProduto");
    imgProduto3.classList.add("imgProduto");
    imgProduto4.classList.add("imgProduto");
    imgProduto5.classList.add("imgProduto");
    imgProduto6.classList.add("imgProduto");

    textoProduto1.classList.add("textoProduto");
    textoProduto2.classList.add("textoProduto");
    textoProduto3.classList.add("textoProduto");
    textoProduto4.classList.add("textoProduto");
    textoProduto5.classList.add("textoProduto");
    textoProduto6.classList.add("textoProduto");

    produto1.classList.add("produtoMenu");
    produto2.classList.add("produtoMenu");
    produto3.classList.add("produtoMenu");
    produto4.classList.add("produtoMenu");
    produto5.classList.add("produtoMenu");
    produto6.classList.add("produtoMenu");

    //ATRIBUI AS IMAGENS
    imgProduto1.src = "imgs/menu/asinha-empanada.jpg";
    imgProduto2.src = "imgs/menu/cerveja-caneco.jpg";
    imgProduto3.src = "imgs/menu/hamburguer.jpg";
    imgProduto4.src = "imgs/menu/pasteis.jpeg";
    imgProduto5.src = "imgs/menu/prato-peixe.jpg";
    imgProduto6.src = "imgs/menu/uisque.jpg";

    //ATRIBUI OS TEXTOS
    textoProduto1.textContent = "Asinha Empanada - R$35,00";
    textoProduto2.textContent = "Cerveja no Caneco - R$10,00";
    textoProduto3.textContent = "Hamburguer - R$15,00";
    textoProduto4.textContent = "Porção Pasteis - R$15,00";
    textoProduto5.textContent = "Peixe Empanado - R$40,00";
    textoProduto6.textContent = "Copo Uisque - R$10,00";


    //JUNTA TUDO

    container.appendChild(menu);

    menu.appendChild(produto1);
    menu.appendChild(produto3);
    menu.appendChild(produto4);
    menu.appendChild(produto5);
    menu.appendChild(produto2);
    menu.appendChild(produto6);

    produto1.appendChild(imgProduto1);
    produto2.appendChild(imgProduto2);
    produto3.appendChild(imgProduto3);
    produto4.appendChild(imgProduto4);
    produto5.appendChild(imgProduto5);
    produto6.appendChild(imgProduto6);

    produto1.appendChild(textoProduto1);
    produto2.appendChild(textoProduto2);
    produto3.appendChild(textoProduto3);
    produto4.appendChild(textoProduto4);
    produto5.appendChild(textoProduto5);
    produto6.appendChild(textoProduto6);

}

export default createMenuHtml;