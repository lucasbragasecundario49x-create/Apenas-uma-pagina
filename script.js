const botaoNegado = document.getElementById("negado");
const botaoAceito = document.getElementById("aceito")
const descricao = document.querySelector(".descricao");
const img = document.getElementById('imagem')
const span = document.getElementById('spanAtualizando')

botaoNegado.addEventListener("mouseover", () => {
    if (botaoNegado.parentNode !== document.body) {
        document.body.appendChild(botaoNegado);
    }

    const desc = descricao.getBoundingClientRect();

    const larguraBotao = botaoNegado.offsetWidth;
    const alturaBotao = botaoNegado.offsetHeight;

    const larguraTela = document.documentElement.clientWidth;
    const alturaTela = document.documentElement.clientHeight;

    let x, y;
    let valido = false;

    while (!valido) {
        x = Math.random() * (larguraTela - larguraBotao);
        y = Math.random() * (alturaTela - alturaBotao);

        const colide =
            x < desc.right &&
            x + larguraBotao > desc.left &&
            y < desc.bottom &&
            y + alturaBotao > desc.top;

        if (!colide) {
            valido = true;
        }
    }


    botaoNegado.style.position = "fixed";
    botaoNegado.style.left = `${x}px`;
    botaoNegado.style.top = `${y}px`;

    span.textContent = "Ops! Parece que tá fugindo"
});

botaoAceito.addEventListener('click', ()=> {
   img.src = "imagemAceito.jpg"
   span.textContent = "Me mande um print nessa tela agora mesmo por qualquer lugar"
})

botaoAceito.addEventListener('mouseover', () =>{
    span.textContent = "Sério??? Fiquei nervoso"
})

