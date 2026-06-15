function enviarPergunta() {

    const input =
        document.getElementById("userInput");

    const texto =
        input.value.toLowerCase();

    if (!texto) return;

    const chat =
        document.getElementById("chat-messages");

    chat.innerHTML += `
        <div class="user">${input.value}</div>
    `;

    let resposta = "";

    if (
        texto.includes("soja")
    ) {

        resposta =
        "🌱 A soja é uma das principais commodities agrícolas do Brasil.";

    } else if (
        texto.includes("milho")
    ) {

        resposta =
        "🌽 O milho é utilizado para alimentação humana, animal e produção de etanol.";

    } else if (
        texto.includes("ia") ||
        texto.includes("inteligência artificial")
    ) {

        resposta =
        "🤖 A IA ajuda na previsão climática, produtividade e detecção de pragas.";

    } else if (
        texto.includes("sustentabilidade")
    ) {

        resposta =
        "🌎 A sustentabilidade reduz desperdícios e aumenta a eficiência no campo.";

    } else {

        resposta =
        "🚜 Obrigado pela pergunta! Nossa plataforma pode auxiliar produtores com tecnologia, monitoramento e gestão agrícola.";

    }

    setTimeout(() => {

        chat.innerHTML += `
            <div class="bot">${resposta}</div>
        `;

        chat.scrollTop =
            chat.scrollHeight;

    }, 500);

    input.value = "";
}