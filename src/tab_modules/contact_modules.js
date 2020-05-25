
const createContactHtml = (container) => {

    //CRIA ELEMENTOS
    let contatoDiv = document.createElement("div");
    let endereçoT = document.createElement("h3");
    let endereço = document.createElement("p");
    let telefoneT = document.createElement("h3");
    let telefone = document.createElement("p");
    let emailT = document.createElement("h3");
    let email = document.createElement("p");
    let horarioT = document.createElement("h3");
    let horario = document.createElement("p");

    //ATRIBUI ID
    contatoDiv.id = "contatoDiv";

    //ATRIBUI TEXTO
    endereçoT.textContent = "Endereço";
    telefoneT.textContent = "Telefone";
    emailT.textContent = "Email";
    horarioT.textContent = "Hoŕario";

    endereço.textContent = "Avenida 45, Brooklyn - Nova York";
    telefone.textContent = "4545-4543";
    email.textContent = "maclarens@gmail.com";
    horario.textContent = "Todos os dias de 15:00 às 03:00";

    //JUNTA
    contatoDiv.appendChild(endereçoT);
    contatoDiv.appendChild(endereço);
    contatoDiv.appendChild(telefoneT);
    contatoDiv.appendChild(telefone);
    contatoDiv.appendChild(emailT);
    contatoDiv.appendChild(email);
    contatoDiv.appendChild(horarioT);
    contatoDiv.appendChild(horario);

    container.appendChild(contatoDiv);
}

export default createContactHtml;