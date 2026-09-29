// =========================
// IMPORTAÇÕES
// =========================

import {
    inicioTemplate,
    projetosTemplate,
    cadastroTemplate
} from "./templates.js";

import { ativarMascaras } from "./mascaras.js";

import { ativarValidacao } from "./validacao.js";

import {
    salvarRota,
    recuperarRota
} from "./storage.js";


// =========================
// ELEMENTO PRINCIPAL
// =========================

const app = document.getElementById("app");


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


    const links = menuLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menuLinks.classList.remove("ativo");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================
// RENDERIZAÇÃO DAS PÁGINAS
// =========================

function renderizarPagina() {

    let rota = window.location.hash;


    if (!rota) {

        const ultimaRota = recuperarRota();


        if (ultimaRota) {

            rota = ultimaRota;

        } else {

            rota = "#inicio";

        }

    }


    salvarRota(rota);


    if (rota === "#projetos") {

        app.innerHTML = projetosTemplate;

    } else if (rota === "#cadastro") {

        app.innerHTML = cadastroTemplate;

    } else {

        app.innerHTML = inicioTemplate;

    }


    ativarMascaras();

    ativarValidacao();

}


// =========================
// INICIALIZAÇÃO
// =========================

ativarMenu();

renderizarPagina();


// =========================
// MUDANÇA DE ROTA
// =========================

window.addEventListener(
    "hashchange",
    renderizarPagina
);