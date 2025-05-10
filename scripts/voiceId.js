const frasesVerificacao = [
    "A segurança é fundamental para proteger nossas informações.",
    "A identidade vocal garante mais proteção aos dados.",
    "Vamos cantar para confirmar sua identidade.",
    "Tecnologia e voz unidas pela sua segurança.",
    "Fale com confiança, sua voz é única.",
    "Verifique sua identidade com uma simples frase.",
    "Diga a verdade com sua voz.",
    "Proteger dados começa com você.",
    "Nossa segurança começa com sua voz.",
    "A voz é a sua nova chave de acesso.",
    "Fale e confirme: você está seguro.",
    "Sua voz representa sua identidade.",
    "A proteção começa pela palavra certa.",
    "Sua frase pode abrir portas.",
    "A biometria vocal é o futuro da segurança.",
    "Diga a frase e mostre quem você é.",
    "Confiança começa com reconhecimento.",
    "Um sistema inteligente escuta você.",
    "A voz não mente: diga a frase.",
    "Segurança digital começa com uma frase.",
    "Seu tom de voz é exclusivo.",
    "Verificação de voz ativa: fale agora.",
    "A voz certa, no lugar certo.",
    "Diga e acesse com segurança.",
    "Falar é o novo digitar.",
    "Simplicidade e segurança com sua voz.",
    "A frase de hoje protege o amanhã.",
    "Use sua voz como assinatura.",
    "A autenticidade está na sua fala.",
    "Reconheça-se com sua própria voz."
];

function gerarFraseAleatoria() {
    const frase = frasesVerificacao[Math.floor(Math.random() * frasesVerificacao.length)];
    const container = document.getElementById("frase-verificacao");
    if (container) container.innerText = frase;
}

document.addEventListener("DOMContentLoaded", gerarFraseAleatoria);
