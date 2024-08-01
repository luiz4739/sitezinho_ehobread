const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu animal favorito?",
        alternativas: [
            {
                texto: "Cachorro",
                afirmacao: "Você é leal e confiável, como um cachorro."
            },
            {
                texto: "Gato",
                afirmacao: "Você é independente e elegante, como um gato."
            }
        ]
    },
    {
        enunciado: "Qual seu tipo de clima favorito?",
        alternativas: [
            {
                texto: "Ensolarado",
                afirmacao: "Você é caloroso e cheio de energia."
            },
            {
                texto: "Chuvoso",
                afirmacao: "Você é tranquilo e reflexivo."
            }
        ]
    },
    {
        enunciado: "Qual é a sua cor favorita?",
        alternativas: [
            {
                texto: "Azul",
                afirmacao: "Você é calmo e confiável."
            },
            {
                texto: "Vermelho",
                afirmacao: "Você é apaixonado e vibrante."
            }
        ]
    },
    {
        enunciado: "Qual é o seu tipo de música favorita?",
        alternativas: [
            {
                texto: "Rock",
                afirmacao: "Você é rebelde e energético."
            },
            {
                texto: "Clássica",
                afirmacao: "Você é sofisticado e apreciador das artes."
            }
        ]
    },
    {
        enunciado: "Qual é o seu passatempo favorito?",
        alternativas: [
            {
                texto: "Ler",
                afirmacao: "Você é curioso e gosta de aprender."
            },
            {
                texto: "Esportes",
                afirmacao: "Você é ativo e competitivo."
            }
        ]
    },
];

const resultados = {
    "Você é leal e confiável, como um cachorro. Você é caloroso e cheio de energia. Você é calmo e confiável. Você é rebelde e energético. Você é curioso e gosta de aprender.": "Você é um Pão de Forma!",
    "Você é independente e elegante, como um gato. Você é tranquilo e reflexivo. Você é apaixonado e vibrante. Você é sofisticado e apreciador das artes. Você é ativo e competitivo.": "Você é uma Baguete!"
};

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    textoResultado.textContent = resultados[historiaFinal.trim()] || "Você é um pão único!";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
