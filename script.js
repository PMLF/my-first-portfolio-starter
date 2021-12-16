// Translations
var pt = {
	title: "Olá, o meu nome é &lt;Rapariga do Código\\&gt;",
	subtitle:
		"Sou uma web developer focada em criar experiências fantásticas na web mantendo presentes as melhores práticas de UI/UX",
	header: ["Sobre mim", "Projetos", "Contactos"],
};
var en = {
	title: "Hello, my name is &lt;Rapariga do Código\\&gt;",
	subtitle:
		"I'm a Web developer focused on crafting great web experiences by keeping present UX/UI best practices",
	header: ["About", "Projects", "Contacts"],
};

// States
let isDarkTheme = false;
let isPt = false;

// Theme elements
const body = document.querySelector("body");
const textToChangeColor = document.querySelectorAll(
	".title, .intro div p, .heading, .project-card-content h3, .project-card-content p"
);
const themeButton = document.querySelector(".themeButton");

// Language elements
const title = document.querySelector(".title");
const subtitle = document.querySelector(".intro div p");
const headerLinks = document.querySelectorAll(".header-links li a");
const languageButton = document.querySelector(".languageButton");

function toggleDarkTheme() {
	if (isDarkTheme) {
		body.style.backgroundColor = "#f9faff";

		for (let i = 0; i < textToChangeColor.length; i++) {
			textToChangeColor[i].style.color = "#333333";
		}

		themeButton.style.backgroundImage = "url('./assets/themes/dark.png')";
		isDarkTheme = false;
	} else {
		body.style.backgroundColor = "#333333";

		for (let i = 0; i < textToChangeColor.length; i++) {
			textToChangeColor[i].style.color = "#f9faff";
		}

		themeButton.style.backgroundImage = "url('./assets/themes/light.png')";
		isDarkTheme = true;
	}
}

function toggleLanguage() {
	if (isPt) {
		title.innerHTML = en.title;
		subtitle.innerHTML = en.subtitle;

		for (let i = 0; i < headerLinks.length; i++) {
			headerLinks[i].innerHTML = en.header[i];
		}

		languageButton.style.backgroundImage =
			"url('./assets/translations/pt.png')";
		isPt = false;
	} else {
		title.innerHTML = pt.title;
		subtitle.innerHTML = pt.subtitle;

		for (let i = 0; i < headerLinks.length; i++) {
			headerLinks[i].innerHTML = pt.header[i];
		}

		languageButton.style.backgroundImage =
			"url('./assets/translations/uk.png')";
		isPt = true;
	}
}
