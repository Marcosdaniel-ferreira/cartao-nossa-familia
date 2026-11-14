// 1. INICIALIZA ANIMAÇÕES DE ROLAGEM (AOS)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// 2. MENU MOBILE (HAMBÚRGUER)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link (Mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 3. LÓGICA DO FAQ (SANFONA)
const faqPerguntas = document.querySelectorAll('.faq-pergunta');

faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.nextElementSibling;
        const icon = pergunta.querySelector('span');
        
        // Fecha as outras respostas abertas
        document.querySelectorAll('.faq-resposta').forEach(item => {
            if (item !== resposta) {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector('span').textContent = '+';
            }
        });

        // Alterna a resposta clicada
        if (resposta.style.maxHeight) {
            resposta.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            resposta.style.maxHeight = resposta.scrollHeight + "px";
            icon.textContent = '-';
        }
    });
});

// 4. LÓGICA DO TOGGLE DE PREÇOS (MENSAL/ANUAL)
const toggleSwitch = document.getElementById('pricing-toggle');
const valores = document.querySelectorAll('.valor');
const periodos = document.querySelectorAll('.periodo');

// Substitua os textos abaixo pelos seus links reais da plataforma Tenex
const linksTenex = {
    individual: { 
        mensal: "https://cartaonossafamilia.tenex.com.br/contratar/individual?plano=5f697100-d98c-4352-a8a7-c4dc0e21a918", 
        anual: "https://cartaonossafamilia.tenex.com.br/contratar/individual?plano=81592926-cdc2-4bc1-bd59-a9ba1b0c848a" 
    },
    familiar: { 
        mensal: "https://cartaonossafamilia.tenex.com.br/contratar/familiar?plano=d94fdb84-19e4-4efa-a4a7-2e6d28c6871c", 
        anual: "https://cartaonossafamilia.tenex.com.br/contratar/familiar?plano=f3ed00cf-99ae-4834-94fb-94c2b290be9d" 
    },
    compartilhado: { 
        mensal: "https://cartaonossafamilia.tenex.com.br/contratar/compartilhado?plano=9bc0881b-7393-4c88-98da-777cec6f37c7", 
        anual: "https://cartaonossafamilia.tenex.com.br/contratar/compartilhado?plano=74e0382d-9952-4496-afda-41c91ad95f46" 
    }
};

const btnIndividual = document.getElementById('btn-individual');
const btnFamiliar = document.getElementById('btn-familiar');
const btnCompartilhado = document.getElementById('btn-compartilhado');

toggleSwitch.addEventListener('change', function() {
    if(this.checked) {
        // MODO ANUAL
        valores.forEach(v => v.textContent = v.getAttribute('data-anual'));
        periodos.forEach(p => p.textContent = p.getAttribute('data-periodo-anual'));
        document.querySelectorAll('.tag-economia').forEach(tag => tag.classList.add('ativa'));
        
        // Atualiza os links
        btnIndividual.href = linksTenex.individual.anual;
        btnFamiliar.href = linksTenex.familiar.anual;
        btnCompartilhado.href = linksTenex.compartilhado.anual;
    } else {
        // MODO MENSAL
        valores.forEach(v => v.textContent = v.getAttribute('data-mensal'));
        periodos.forEach(p => p.textContent = p.getAttribute('data-periodo-mensal'));
        document.querySelectorAll('.tag-economia').forEach(tag => tag.classList.remove('ativa'));
        
        // Atualiza os links
        btnIndividual.href = linksTenex.individual.mensal;
        btnFamiliar.href = linksTenex.familiar.mensal;
        btnCompartilhado.href = linksTenex.compartilhado.mensal;
    }
});

/* =========================================
   SLIDER DA PÁGINA DA CLÍNICA (SWIPER JS)
   ========================================= */
// O "if" garante que esse código só rode se o elemento existir, evitando erros na página principal
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper('.mySwiper', {
        loop: true, 
        grabCursor: true, 
        effect: 'coverflow', 
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // Passa a foto a cada 3 segundos
            disableOnInteraction: false,
        }
    });
}



// INICIALIZA OS LINKS PADRÕES (MENSAL) ASSIM QUE A PÁGINA CARREGA
btnIndividual.href = linksTenex.individual.mensal;
btnFamiliar.href = linksTenex.familiar.mensal;
btnCompartilhado.href = linksTenex.compartilhado.mensal;