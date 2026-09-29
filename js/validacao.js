// =========================
// VALIDAÇÃO DO FORMULÁRIO
// =========================

export function ativarValidacao() {

    const formulario = document.getElementById("formulario");

    const toast = document.getElementById("toast");


    if (!formulario || !toast) {
        return;
    }


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome = document.getElementById("nome");

        const email = document.getElementById("email");

        const cpf = document.getElementById("cpf");

        const telefone = document.getElementById("telefone");

        const cep = document.getElementById("cep");


        // Verificação do nome
        if (nome.value.trim().length < 3) {

            alert("Digite seu nome completo.");

            nome.focus();

            return;
        }


        // Verificação do e-mail
        if (!email.validity.valid) {

            alert("Digite um e-mail válido.");

            email.focus();

            return;
        }


        // Verificação do CPF
        if (!cpf.validity.valid) {

            alert("Digite o CPF no formato correto.");

            cpf.focus();

            return;
        }


        // Verificação do telefone
        if (!telefone.validity.valid) {

            alert("Digite o telefone no formato correto.");

            telefone.focus();

            return;
        }


        // Verificação do CEP
        if (!cep.validity.valid) {

            alert("Digite o CEP no formato correto.");

            cep.focus();

            return;
        }


        // Se estiver tudo certo
        toast.classList.add("ativo");


        formulario.reset();


        setTimeout(function () {

            toast.classList.remove("ativo");

        }, 3000);

    });

}
