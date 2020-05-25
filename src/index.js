
import createHomeHtml from "./tab_modules/home_module";
import createHeader from "./tab_modules/header_module";
import createMenuHtml from "./tab_modules/menu_modules";
import createContactHtml from "./tab_modules/contact_modules";

const container = document.querySelector("#content")

createHeader(container);
createHomeHtml(container);

const home = document.querySelector("#titulo");
const menu = document.querySelector("#menuB");
const contato = document.querySelector("#contato");

function removeContent () {
    while (container.lastElementChild.tagName != "HEADER") {
        container.removeChild(container.lastChild);
    }
}

home.addEventListener("click", function (event) {
    removeContent();
    createHomeHtml(container);
})

menu.addEventListener("click", function (event) {
    removeContent();
    createMenuHtml(container);
})

contato.addEventListener("click", function (event) {
    removeContent();
    createContactHtml(container);
})