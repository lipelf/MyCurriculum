document.addEventListener("DOMContentLoaded", () => {
    const nameHeader = document.getElementById('name-header');
    const professionHeader = document.getElementById('profession-header');

    nameHeader.textContent = "Luiz Fellipe Rocha";

    const text = "Desenvolvedor Web";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            professionHeader.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);

    const sobreIcon = document.getElementById('sobre-icon');
    const habilidadesIcon = document.getElementById('habilidades-icon');
    const resumoIcon = document.getElementById('resumo-icon');
    const experienciasIcon = document.getElementById('experiencias-icon');
    const escolaridadeIcon = document.getElementById('escolaridade-icon');
    const contatoIcon = document.getElementById('contato-icon');

    sobreIcon.addEventListener('click', () => {
        window.location.hash = 'sobre';
    });

    habilidadesIcon.addEventListener('click', () => {
        window.location.hash = 'habilidades';
    });

    resumoIcon.addEventListener('click', () => {
        window.location.hash = 'resumo';
    });

    experienciasIcon.addEventListener('click', () => {
        window.location.hash = 'experiencias';
    });

    escolaridadeIcon.addEventListener('click', () => {
        window.location.hash = 'escolaridade';
    });

    contatoIcon.addEventListener('click', () => {
        window.location.hash = 'contato';
    });
});
