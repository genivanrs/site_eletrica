const MEU_NUMERO = "5527996379425";

function navegar(pagina) {
    const content = document.getElementById('content');
    if (!content) return;
    window.scrollTo(0, 0);

    if (pagina === 'home') renderHome(content);
    else if (pagina === 'politica') renderPolitica(content);
    else if (DADOS_SERVICOS[pagina]) {
        renderPaginaServico(content, DADOS_SERVICOS[pagina], pagina);
    }
}

function renderHome(container) {
    container.innerHTML = `
        <section class="hero-clean">
            <h1>Soluções Profissionais em Tecnologia e Serviços</h1>
            <p>Qualidade, segurança e inovação para sua casa ou empresa</p>
        </section>
        <div class="services-grid">
            <div class="card" onclick="navegar('eletrica')">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500" alt="Elétrica">
                <div class="card-info"><h3>⚡ Elétrica</h3></div>
            </div>
            <div class="card" onclick="navegar('lavagem')">
                <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=500" alt="Lavagem">
                <div class="card-info"><h3>✨ Lavagem</h3></div>
            </div>
            <div class="card" onclick="navegar('veicular')">
                <img src="img/img_higienizacao_interna.png" alt="Higienização Veicular">
                <div class="card-info"><h3>🧼 Higienização Veicular</h3></div>
            </div>
            <div class="card" onclick="navegar('estofados')">
                <img src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=500" alt="Estofados">
                <div class="card-info"><h3>🛋️ Estofados</h3></div>
            </div>
            <div class="card" onclick="navegar('redes')">
                <img src="img/infraestrutura.png" alt="Redes">
                <div class="card-info"><h3>🌐 Infra Redes</h3></div>
            </div>
            <div class="card" onclick="navegar('websites')">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" alt="Websites">
                <div class="card-info"><h3>💻 Web Sites</h3></div>
            </div>
            <div class="card" onclick="navegar('portoes')">
                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=500" alt="Portões">
                <div class="card-info"><h3>🔐 Portões/Travas</h3></div>
            </div>
        </div>
    `;
}

function renderPaginaServico(container, dados, chave) {
    let htmlItens = "";
    
    // Se o serviço tiver "itens" (estilo lista simples)
    if (dados.itens) {
        htmlItens = `<div class="eletrica-grid">
            ${dados.itens.map(i => `
                <div class="eletrica-img-card" style="padding:15px; text-align:left">
                    <h4 style="color:#22c55e">${i.t}</h4>
                    <p style="font-size:13px; color:#64748b">${i.d}</p>
                </div>
            `).join('')}
        </div>`;
    } 
    // Se o serviço tiver "pacotes" (estilo combos)
    else if (dados.pacotes) {
        htmlItens = `<div class="combo-grid">
            ${dados.pacotes.map(p => `
                <div class="combo-card ${p.destaque ? 'destaque' : ''}">
                    ${p.destaque ? '<span class="badge">RECOMENDADO</span>' : ''}
                    <h3>${p.nome}</h3>
                    <ul style="list-style:none; font-size:13px; margin:15px 0;">
                        ${p.itens.map(item => `<li style="margin-bottom:5px">✔ ${item}</li>`).join('')}
                    </ul>
                    <button class="btn-enviar" onclick="abrirModal('${p.nome}')">Pedir Orçamento</button>
                </div>
            `).join('')}
        </div>`;
    }

    container.innerHTML = `
        <div class="detalhes-container">
            <button class="btn-voltar" onclick="navegar('home')">← Voltar para Início</button>
            <h2>${dados.titulo}</h2>
            <p>${dados.descricao || ""}</p>
            ${htmlItens}
            ${!dados.pacotes ? `<button class="btn-enviar" onclick="abrirModal('${dados.titulo}')">Solicitar Orçamento</button>` : ""}
        </div>
    `;
}

function abrirModal(servico = "") {
    const modal = document.getElementById('modalOrcamento');
    modal.style.display = "flex";
    if (servico) document.getElementById('m-servico').value = servico;
}

function fecharModal() {
    document.getElementById('modalOrcamento').style.display = "none";
}

document.getElementById('formOrcamento').onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('m-nome').value;
    const servico = document.getElementById('m-servico').value;
    const msg = encodeURIComponent(`Olá! Sou ${nome}. Gostaria de um orçamento para: ${servico}`);
    window.open(`https://wa.me/${27996379425}?text=${msg}`, '_blank');
};

// Fechar modal ao clicar fora
window.onclick = function(e) {
    if (e.target.id === 'modalOrcamento') fecharModal();
};

function renderPolitica(container) {
    container.innerHTML = `
        <div class="detalhes-container">
            <button class="btn-voltar" onclick="navegar('home')">← Voltar</button>

            <h2>Política de Privacidade</h2>

            <p>A sua privacidade é importante para nós. É política da <strong>DeG Soluções</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>

            <h3>📌 Coleta de Informações</h3>
            <p>Coletamos informações pessoais apenas quando realmente necessário para fornecer um serviço, como nome e serviço solicitado via WhatsApp.</p>

            <h3>📌 Uso das Informações</h3>
            <p>As informações coletadas são utilizadas exclusivamente para atendimento, orçamento e comunicação com o cliente.</p>

            <h3>📌 Compartilhamento</h3>
            <p>Não compartilhamos informações pessoais publicamente ou com terceiros, exceto quando exigido por lei.</p>

            <h3>📌 Cookies e Anúncios</h3>
            <p>Podemos utilizar cookies para melhorar a experiência do usuário. O Google pode usar cookies para exibir anúncios relevantes com base em visitas anteriores.</p>

            <h3>📌 Compromisso do Usuário</h3>
            <p>O usuário se compromete a fazer uso adequado das informações e conteúdos oferecidos no site.</p>

            <h3>📌 Alterações</h3>
            <p>Esta política pode ser atualizada periodicamente.</p>

            <p style="margin-top:20px;font-size:13px;color:#64748b">
                Última atualização: ${new Date().getFullYear()}
            </p>
        </div>
    `;
}


// Iniciar
document.addEventListener('DOMContentLoaded', () => navegar('home'));
