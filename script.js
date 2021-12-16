/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

let isDarkTheme = false;

const body = document.querySelector("body");
const textToChangeColor = document.querySelectorAll(
	".title, .intro div p, .heading, .project-card-content h3, .project-card-content p"
);
const themeButton = document.querySelector(".themeButton");

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
