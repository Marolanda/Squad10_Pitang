// Aguarda o evento "DOMContentLoaded", que ocorre quando o documento HTML foi completamente carregado e analisado.
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona elementos da página pelo ID e atribui-os a variáveis para facilitar o acesso posterior.
    const listagemClientesLink = document.getElementById("listagemClientesLink");
    const visualizacaoClienteLink = document.getElementById("visualizacaoClienteLink");
    const editarClienteLink = document.getElementById("editarClienteLink");
    const pageTitle = document.getElementById("pageTitle");
    const pageContent = document.getElementById("pageContent");
    let clienteIdSelecionado = null; // Variável para armazenar o ID do cliente selecionado

    // Função para carregar a página de cadastro de cliente
    function carregarPaginaCadastroCliente() {
        // Altera o título da página e o conteúdo principal para o formulário de cadastro de cliente.
        pageTitle.textContent = "Cadastro de Cliente";
        pageContent.innerHTML = `
            <!-- Formulário de cadastro de cliente -->
        `;

        // Seleciona o formulário de cadastro de cliente
        const cadastroClienteForm = document.getElementById("cadastroClienteForm");

        // Adiciona um evento de submissão ao formulário de cadastro de cliente
        cadastroClienteForm.addEventListener("submit", function (e) {
            e.preventDefault();
            // Coleta os dados do formulário e os armazena em um objeto "novoCliente"
            const novoCliente = {
                nome: document.getElementById("nomeCliente").value,
                cnpj: document.getElementById("cnpjCliente").value,
                endereco: document.getElementById("enderecoCliente").value,
                email: document.getElementById("emailCliente").value,
                telefone: document.getElementById("telefoneCliente").value,
                responsavel: document.getElementById("responsavelCliente").value,
                creditosPaginas: parseInt(document.getElementById("creditosPaginas").value),
            };

            // Simula o envio do novo cliente (você deve implementar a lógica real de envio)
            console.log("Novo Cliente:", novoCliente);

            // Após o envio bem-sucedido, você pode redirecionar para a página de listagem de clientes
            window.location.href = "listagem-clientes.html"; // Redirecione para a página de listagem de clientes
        });
    }

    // Função para carregar a página de listagem de clientes
    function carregarPaginaListagemClientes() {
        // Altera o título da página e o conteúdo principal para a listagem de clientes.
        pageTitle.textContent = "Listagem de Clientes";
        pageContent.innerHTML = `
            <!-- Conteúdo da página de listagem de clientes -->
        `;

        // Função para atualizar a visibilidade do botão "Excluir Clientes Selecionados"
        function atualizarVisibilidadeExcluir() {
            // ...

            // Verificar se há algum checkbox marcado
            const algumSelecionado = Array.from(checkboxes).some((checkbox) => checkbox.checked);

            // Atualizar a visibilidade do botão com base na seleção de clientes
            if (algumSelecionado) {
                excluirClientesBtn.style.display = "block";
            } else {
                excluirClientesBtn.style.display = "none";
            }
        }

        // Função para excluir clientes selecionados
        function excluirClientesSelecionados() {

            // Atualize a tabela de clientes e a visibilidade do botão
            atualizarTabelaClientes();
            atualizarVisibilidadeExcluir();
        }

        // Função para atualizar a tabela de clientes (você deve implementar isso com os dados reais)
        function atualizarTabelaClientes() {
            // Obtenha a tabela de clientes e atualize-a com os dados mais recentes
            const listaClientes = document.getElementById("listaClientes");
            // Substitua o conteúdo da tabela com os dados atualizados dos clientes
        }
    }

    // Função para carregar a página de edição de cliente
    function carregarPaginaEditarCliente(clienteId) {
        // Altera o título da página e o conteúdo principal para o formulário de edição de cliente.
        pageTitle.textContent = "Edição de Cliente";
        pageContent.innerHTML = `
            <!-- Formulário de edição de cliente -->
        `;

        // Redirecione para a página de visualização de cliente.
        window.location.href = `visualizar-cliente.html?clienteId=${clienteId}`;
    }

    // Função para carregar a página de visualização de cliente
    function carregarPaginaVisualizacaoCliente(clienteId) {
        // Altera o título da página e o conteúdo principal para a visualização de cliente.
        pageTitle.textContent = "Visualização de Cliente";
        pageContent.innerHTML = `
            <!-- Conteúdo da página de visualização de cliente -->
        `;
    }

    // Inicialmente, carregar a página de Listagem de Clientes
    carregarPaginaListagemClientes();

    // ...
});
