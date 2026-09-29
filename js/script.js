// =========================
// ELEMENTO PRINCIPAL
// =========================

const app = document.getElementById("app");


// =========================
// TEMPLATE DA PÁGINA INICIAL
// =========================

const inicioTemplate = `

<section>

    <h2>Transformando vidas</h2>

    <p>
        A "Mãos que Transformam" é uma organização dedicada
        a promover ações sociais e apoiar pessoas em situação
        de vulnerabilidade.
    </p>

    <p>
        Nosso trabalho é realizado por meio de projetos,
        doações e ações voluntárias que buscam uma sociedade
        mais justa.
    </p>

    <img
        src="imagem/imagens/ação.social.jpg"
        alt="Voluntários participando de uma ação social">

</section>


<section>

    <h2>Entre em contato</h2>

    <p>
        Quer apoiar nosso trabalho ou saber mais sobre nossas ações?
        Entre em contato conosco.
    </p>

    <p>
        E-mail:
        <a href="mailto:contato@maosquetransformam.org">
            contato@maosquetransformam.org
        </a>
    </p>

    <p>
        Telefone: (11) 99999-9999
    </p>

</section>

`;


// =========================
// TEMPLATE DOS PROJETOS
// =========================

const projetosTemplate = `

<section>

    <h2>Conheça nossos projetos</h2>

    <p>
        A Mãos que Transformam desenvolve projetos sociais
        para pessoas em situação de vulnerabilidade.
    </p>

</section>


<div class="projetos-container">

    <section class="projeto">

        <h2>Educação</h2>

        <span class="badge">Educação</span>

        <img
            src="imagem/imagens/educacao.jpg"
            alt="Crianças participando de atividades educativas">

        <p>
            Promovemos atividades educativas e ações de apoio
            para crianças e adolescentes.
        </p>

    </section>


    <section class="projeto">

        <h2>Arrecadação de alimentos</h2>

        <span class="badge">Doação</span>

        <img
            src="imagem/imagens/alimentacao.jpg"
            alt="Voluntários organizando doações de alimentos">

        <p>
            Realizamos campanhas para arrecadar alimentos e
            distribuir cestas básicas para famílias que precisam.
        </p>

    </section>


    <section class="projeto">

        <h2>Ações voluntárias</h2>

        <span class="badge">Voluntariado</span>

        <img
            src="imagem/imagens/voluntarios.jpg"
            alt="Voluntários participando de uma ação social">

        <p>
            Organizamos ações com voluntários para levar
            doações e atividades para diferentes comunidades.
        </p>

    </section>

</div>

`;


// =========================
// TEMPLATE DO CADASTRO
// =========================

const cadastroTemplate = `

<section>

    <h2>Cadastre-se como voluntário</h2>

    <p>
        Preencha o formulário abaixo para demonstrar seu interesse
        em participar das ações da Mãos que Transformam.
    </p>

</section>


<section>

    <h2>Dados pessoais</h2>


    <div class="alerta" role="alert">

        <strong>Atenção:</strong>
        preencha todos os campos obrigatórios antes
        de enviar o cadastro.

    </div>


    <form>

        <fieldset>

            <legend>Informações pessoais</legend>


            <p>

                <label for="nome">
                    Nome completo:
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    autocomplete="name"
                    required>

            </p>


            <p>

                <label for="email">
                    E-mail:
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    autocomplete="email"
                    required>

            </p>


            <p>

                <label for="nascimento">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required>

            </p>


            <p>

                <label for="cpf">
                    CPF:
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    maxlength="14"
                    inputmode="numeric"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    required>

            </p>


            <p>

                <label for="telefone">
                    Telefone:
                </label>

                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                    maxlength="15"
                    inputmode="numeric"
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    required>

            </p>

        </fieldset>


        <fieldset>

            <legend>Endereço</legend>


            <p>

                <label for="cep">
                    CEP:
                </label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    maxlength="9"
                    inputmode="numeric"
                    pattern="[0-9]{5}-[0-9]{3}"
                    required>

            </p>


            <p>

                <label for="endereco">
                    Endereço:
                </label>

                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required>

            </p>


            <p>

                <label for="cidade">
                    Cidade:
                </label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required>

            </p>


            <p>

                <label for="estado">
                    Estado:
                </label>

                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required>

            </p>

        </fieldset>


        <p>

            <button type="submit">
                Enviar cadastro
            </button>

        </p>

    </form>


    <div
        id="toast"
        class="toast"
        role="status">

        Cadastro enviado com sucesso!

    </div>

</section>

`;


// =========================
// ROTEAMENTO
// =========================

function renderizarPagina() {

    const rota = window.location.hash;


    if (rota === "#projetos") {

        app.innerHTML = projetosTemplate;

    } else if (rota === "#cadastro") {

        app.innerHTML = cadastroTemplate;

    } else {

        app.innerHTML = inicioTemplate;

    }


    ativarFuncionalidades();

}


// =========================
// MÁSCARA DE CPF
// =========================

function ativarMascaraCPF() {

    const cpf = document.getElementById("cpf");


    if (!cpf) {
        return;
    }


    cpf.addEventListener("input", function () {

        let valor = cpf.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        cpf.value = valor;

    });

}


// =========================
// MÁSCARA DE TELEFONE
// =========================

function ativarMascaraTelefone() {

    const telefone = document.getElementById("telefone");


    if (!telefone) {
        return;
    }


    telefone.addEventListener("input", function () {

        let valor = telefone.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.slice(0, 11);


        if (valor.length <= 10) {

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

        } else {

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }


        telefone.value = valor;

    });

}


// =========================
// MÁSCARA DE CEP
// =========================

function ativarMascaraCEP() {

    const cep = document.getElementById("cep");


    if (!cep) {
        return;
    }


    cep.addEventListener("input", function () {

        let valor = cep.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.slice(0, 8);

        valor = valor.replace(
            /^(\d{5})(\d)/,
            "$1-$2"
        );

        cep.value = valor;

    });

}


// =========================
// MENU HAMBÚRGUER
// =========================

function ativarMenu() {

    const menuToggle = document.querySelector(".menu-toggle");

    const menuLinks = document.querySelector(".menu-links");


    if (!menuToggle || !menuLinks) {
        return;
    }


    menuToggle.addEventListener("click", function () {

        menuLinks.classList.toggle("ativo");


        if (menuLinks.classList.contains("ativo")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Fechar menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// =========================
// TOAST DO FORMULÁRIO
// =========================

function ativarFormulario() {

    const formulario = document.querySelector("form");

    const toast = document.getElementById("toast");


    if (!formulario || !toast) {
        return;
    }


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        toast.classList.add("ativo");


        setTimeout(function () {

            toast.classList.remove("ativo");

        }, 3000);

    });

}


// =========================
// SALVAR DADOS NO LOCALSTORAGE
// =========================

function ativarLocalStorage() {

    const formulario = document.querySelector("form");


    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", function () {

        const dados = {

            nome: document.getElementById("nome").value,

            email: document.getElementById("email").value,

            nascimento: document.getElementById("nascimento").value,

            cpf: document.getElementById("cpf").value,

            telefone: document.getElementById("telefone").value,

            cep: document.getElementById("cep").value,

            endereco: document.getElementById("endereco").value,

            cidade: document.getElementById("cidade").value,

            estado: document.getElementById("estado").value

        };


        localStorage.setItem(
            "cadastroVoluntario",
            JSON.stringify(dados)
        );

    });

}


// =========================
// RECUPERAR DADOS DO LOCALSTORAGE
// =========================

function carregarDadosSalvos() {

    const dadosSalvos =
        localStorage.getItem("cadastroVoluntario");


    if (!dadosSalvos) {
        return;
    }


    const dados = JSON.parse(dadosSalvos);


    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const nascimento = document.getElementById("nascimento");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const endereco = document.getElementById("endereco");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");


    if (nome) {
        nome.value = dados.nome || "";
    }

    if (email) {
        email.value = dados.email || "";
    }

    if (nascimento) {
        nascimento.value = dados.nascimento || "";
    }

    if (cpf) {
        cpf.value = dados.cpf || "";
    }

    if (telefone) {
        telefone.value = dados.telefone || "";
    }

    if (cep) {
        cep.value = dados.cep || "";
    }

    if (endereco) {
        endereco.value = dados.endereco || "";
    }

    if (cidade) {
        cidade.value = dados.cidade || "";
    }

    if (estado) {
        estado.value = dados.estado || "";
    }

}


// =========================
// ATIVAR TODAS AS FUNCIONALIDADES
// =========================

function ativarFuncionalidades() {

    ativarMascaraCPF();

    ativarMascaraTelefone();

    ativarMascaraCEP();

    ativarMenu();

    ativarFormulario();

    ativarLocalStorage();

    carregarDadosSalvos();

}


// =========================
// NAVEGAÇÃO DA SPA
// =========================

window.addEventListener(
    "hashchange",
    renderizarPagina
);


// =========================
// INICIAR APLICAÇÃO
// =========================

if (app) {

    renderizarPagina();

}