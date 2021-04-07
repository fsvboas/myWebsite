//Change Theme
function darkMode() {
    document.body.classList.toggle("dark-mode");
}

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", darkMode);

//Highlight Menu
const highlightMenu = () => {
    const Highlight = document.querySelector(".highlight");
    const Home = document.querySelector("#home-page");
    const aboutMe = document.querySelector("#about");
    const Projects = document.querySelector("#portfolio");

    let scrollPos = window.scrollY;

    if (window.innerWidth > 800 && scrollPos < 600) {
        Home.classList.add("highlight");
        aboutMe.classList.remove("highlight");
        Projects.classList.remove("highlight");
        return
    } else if (window.innerWidth > 800 && scrollPos < 1300) {
        aboutMe.classList.add("highlight");
        Home.classList.remove("highlight");
        Projects.classList.remove("highlight");
        return
    } else if (window.innerWidth > 800 && scrollPos < 2000) {
        Projects.classList.add("highlight");
        aboutMe.classList.remove("highlight");
        Home.classList.remove("highlight");
        return
    }
    if ((Highlight && window.innerWidth <= 800 && scrollPos < 600) || Highlight) {
        Highlight.classList.remove('highlight');
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Responsive Menu
const menu = document.querySelector(".menu-links");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const Home = document.querySelector("#home-page");
const aboutMe = document.querySelector("#about");
const Projects = document.querySelector("#portfolio");

function open() {
    menu.style.display = "flex";
    menu.style.top = "0";
}

function close() {
    menu.style.top = "-100%";
}

openMenu.addEventListener("click", open);
closeMenu.addEventListener("click", close);

Home.addEventListener("click", close);
aboutMe.addEventListener("click", close);
Projects.addEventListener("click", close);

//Project Cards
const projectCards = document.querySelector("div.my-projects");
const card = document.querySelector("div.project-card");
const newCards = [
    {
        title: "dev.finances",
        image: "assets/projects/dev.finances.png",
        resume: `<p><strong>dev.finance$</strong> é uma aplicação web de controle financeiro, onde é possível cadastrar, excluir e visualizar transações instantaneamente.</p>`,
        usedTechs: `
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        `,
        codeButton: "https://github.com/fsvboas/dev.finances"
    },

    {
        title: "Color",
        image: "assets/projects/Color.png",
        resume: `<p><strong>Color</strong> é um site de uma empresa fictícia que disponibiliza uma enorme gama de cores e combinações, ajudando novas empresas a enriquecerem seus produtos.</p>`,
        usedTechs: `
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        `,
        codeButton: "https://github.com/fsvboas/Color"
    },

    {
        title: "move.it",
        image: "assets/projects/move.it.png",
        resume: `<p><strong>move.it</strong> é uma aplicação web desenvolvida com base na técnica de pomodoro, com design e funcionalidades baseadas em games.</p>`,
        usedTechs: `
        <i class="fab fa-react"></i>`,
        codeButton: "https://github.com/fsvboas/move.it"
    },

    {
        title: "Discord UI Clone",
        image: "assets/projects/discordClone.png",
        resume: `<p> <strong>Discord UI Clone</strong> é uma aplicação que, como o próprio nome sugere, é um clone da interface desktop do aplicativo de comunicação Discord.</p>`,
        usedTechs: `
        <i class= "fab fa-react"></i>`,
        codeButton: "https://github.com/fsvboas/discordClone"
    },

    {
        title: "Landing Page",
        image: "assets/projects/landingPage.png",
        resume: `<p><strong>Landing page</strong> de um aplicativo de celular para fotografias. Este projeto foi realizado como um teste de conhecimento da empresa contratante.</p> `,
        usedTechs: `
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>`,
        codeButton: "https://github.com/fsvboas/landingPage"
    },

    {
        title: "BMI Calculator",
        image: "assets/projects/bmiCalculator.png",
        resume: `<p> <strong>BMI Calculator</strong> é uma simples calculadora que pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.</p> `,
        usedTechs: `
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>`,
        codeButton: "https://github.com/fsvboas/bmiCalculator"
    },
];

newCards.map(projectCard => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector(".project-title").innerHTML = projectCard.title;
    cardClone.querySelector(".project-image").src = projectCard.image;
    cardClone.querySelector(".project-resume").innerHTML = projectCard.resume;
    cardClone.querySelector(".used-techs").innerHTML = projectCard.usedTechs;
    cardClone.querySelector(".code-button").href = projectCard.codeButton;

    projectCards.appendChild(cardClone);
})

card.remove();