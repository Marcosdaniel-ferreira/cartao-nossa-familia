// Banco de Dados Local - Estrutura Simplificada
const bancoDeParceiros = {
    "LILIAN26": {
        nome: "Academia Lilian Mara",
        linkPlanilha: "LINK_DA_PLANILHA_DE_COMISSOES_AQUI", 
        linkTenex: "LINK_DO_TENEX_AQUI",                    
        linkVenda: "LINK_DE_VENDA_DA_LILIAN_AQUI",          
        linkDrive: "LINK_DO_DRIVE_AQUI",                    
        linkManual: "LINK_DO_PDF_AQUI",                     
        linkSuporte: "https://wa.me/55SEUNUMERO"            
    },

    "BIOCENTER26": {
        nome: "Biocenter Laboratório de Análises Clínicas",
        linkPlanilha: "LINK_DA_PLANILHA_DE_COMISSOES_AQUI", 
        linkTenex: "LINK_DO_TENEX_AQUI",                    
        linkVenda: "LINK_DE_VENDA_DA_LILIAN_AQUI",          
        linkDrive: "LINK_DO_DRIVE_AQUI",                    
        linkManual: "LINK_DO_PDF_AQUI",                     
        linkSuporte: "https://wa.me/55SEUNUMERO"            
    },

    "LILISSPA26": {
        nome: "Lilis SPA & Estética",
        linkPlanilha: "LINK_DA_PLANILHA_DE_COMISSOES_AQUI", 
        linkTenex: "LINK_DO_TENEX_AQUI",                    
        linkVenda: "LINK_DE_VENDA_DA_LILIAN_AQUI",          
        linkDrive: "LINK_DO_DRIVE_AQUI",                    
        linkManual: "LINK_DO_PDF_AQUI",                     
        linkSuporte: "https://wa.me/55SEUNUMERO"            
    }
};

// Função de Login Blindada
document.getElementById('btn-entrar').addEventListener('click', function() {
    const codigoDigitado = document.getElementById('codigo-parceiro').value.trim().toUpperCase();
    const erroMsg = document.getElementById('erro-login');

    if (bancoDeParceiros[codigoDigitado]) {
        const dados = bancoDeParceiros[codigoDigitado];
        
        // Preenche Nomes (Só executa se o elemento existir no ecrã)
        if (document.getElementById('nome-parceiro-header')) document.getElementById('nome-parceiro-header').innerText = dados.nome;
        if (document.getElementById('perfil-nome')) document.getElementById('perfil-nome').innerText = dados.nome;
        
        // Preenche Links (Proteção rigorosa contra erro 'null')
        if (document.getElementById('link-planilha')) document.getElementById('link-planilha').href = dados.linkPlanilha;
        if (document.getElementById('link-tenex')) document.getElementById('link-tenex').href = dados.linkTenex;
        if (document.getElementById('link-venda')) document.getElementById('link-venda').href = dados.linkVenda;
        if (document.getElementById('link-drive')) document.getElementById('link-drive').href = dados.linkDrive;
        if (document.getElementById('link-manual')) document.getElementById('link-manual').href = dados.linkManual;
        if (document.getElementById('link-suporte')) document.getElementById('link-suporte').href = dados.linkSuporte;

        // Troca as telas
        if (document.getElementById('tela-login')) document.getElementById('tela-login').style.display = 'none';
        if (document.getElementById('sistema-crm')) document.getElementById('sistema-crm').style.display = 'flex';
        if (erroMsg) erroMsg.style.display = 'none';
    } else {
        if (erroMsg) erroMsg.style.display = 'block';
    }
});

// Permitir login ao premir a tecla "Enter"
const inputCodigo = document.getElementById('codigo-parceiro');
if (inputCodigo) {
    inputCodigo.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') document.getElementById('btn-entrar').click();
    });
}

// Função para Sair do Sistema (Logout)
const btnSair = document.getElementById('btn-sair'); 
if (btnSair) {
    btnSair.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que a página recarregue
        
        // Oculta o painel do sistema e mostra a tela de login
        if (document.getElementById('sistema-crm')) document.getElementById('sistema-crm').style.display = 'none';
        if (document.getElementById('tela-login')) document.getElementById('tela-login').style.display = 'flex';
        
        // Limpa o campo de código para o próximo acesso
        if (document.getElementById('codigo-parceiro')) document.getElementById('codigo-parceiro').value = '';
    });
}

// Função para Sair do Sistema (chamada pelo onclick do HTML)
function sairSistema() {
    // Esconde o painel do sistema e mostra a tela de login
    if (document.getElementById('sistema-crm')) document.getElementById('sistema-crm').style.display = 'none';
    if (document.getElementById('tela-login')) document.getElementById('tela-login').style.display = 'flex';
    
    // Limpa o campo do código para o próximo acesso
    if (document.getElementById('codigo-parceiro')) document.getElementById('codigo-parceiro').value = '';
}