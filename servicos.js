const DADOS_SERVICOS = {
    eletrica: {
        titulo: "⚡ Serviços Elétricos Profissionais",
        descricao: "Atendimento especializado seguindo as normas NBR 5410 para residências e comércios.",
        itens: [
            { t: "🔌 Instalações Completas", d: "Projetos elétricos para obras novas e reformas." },
            { t: "🛠️ Manutenção Corretiva", d: "Correção de curtos e falhas elétricas." },
            { t: "💡 Iluminação LED", d: "Instalação de painéis e fitas LED." },
            { t: "📐 Quadros de Energia", d: "Montagem de quadros com disjuntores e DPS." }
        ]
    },
    lavagem: {
        titulo: "🚗 Estética Automotiva & Lavagem",
        pacotes: [
            { nome: "Simples", itens: ["Lavagem técnica", "Aspiração", "Pretinho"] },
            { nome: "Completo", destaque: true, itens: ["Lavagem detalhada", "Cera líquida", "Caixa de roda"] }
        ]
    },
    higienizacao_veicular: {
        titulo: "✨ Higienização Interna Veicular",
        descricao: "Limpeza profunda do interior do seu veículo, removendo manchas e odores.",
        pacotes: [
            { nome: "Bancos", itens: ["Extração profunda", "Remoção de manchas"] },
            { nome: "Completa", destaque: true, itens: ["Teto", "Carpete", "Sanitização"] }
        ]
    },
    estofados: {
        titulo: "🛋️ Higienização de Estofados",
        pacotes: [
            { nome: "Sofá", itens: ["Eliminação de ácaros", "Remoção de odores"] },
            { nome: "Colchão", itens: ["Tratamento anti-mofo", "Higienização completa"] }
        ]
    },
    redes: {
        titulo: "🌐 Infraestrutura de Redes",
        descricao: "Conectividade de alta performance para sua casa ou empresa.",
        itens: [
            { t: "📶 Wi-Fi Mesh", d: "Eliminação de pontos cegos de internet." },
            { t: "🔌 Cabeamento", d: "Instalação de cabos de rede Cat6." }
        ]
    },
    websites: {
        titulo: "💻 Criação de Web Sites",
        descricao: "Sites modernos e otimizados para converter visitantes em clientes.",
        itens: [
            { t: "📱 Responsivo", d: "Funciona perfeitamente em celulares." },
            { t: "🚀 Landing Pages", d: "Páginas focadas em vendas." }
        ]
    },
    portoes: {
        titulo: "🔐 Portão e Fechaduras Eletrônicas",
        descricao: "Segurança tecnológica para o acesso do seu imóvel.",
        itens: [
            { t: "🚪 Fechadura Digital", d: "Acesso por biometria ou senha." },
            { t: "⚡ Motor de Portão", d: "Instalação de motores rápidos e seguros." }
        ]
    }
};