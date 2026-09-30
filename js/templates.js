// =========================
// TEMPLATES DAS PÁGINAS
// =========================

export const inicioTemplate = `
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
        src="/imagem/otimizadas/acao-social.webp"
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


export const projetosTemplate = `
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
            src="/imagem/otimizadas/educacao.webp"
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
           src="/imagem/otimizadas/alimentacao.webp"
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
            src="/imagem/otimizadas/voluntarios.webp"
            alt="Voluntários participando de uma ação social">

        <p>
            Organizamos ações com voluntários para levar
            doações e atividades para diferentes comunidades.
        </p>

    </section>

</div>
`;


export const cadastroTemplate = `
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

    <form id="formulario">

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
