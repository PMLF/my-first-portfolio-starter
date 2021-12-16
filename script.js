/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

let isDarkTheme = false;

function toggleDarkTheme() {
	if (isDarkTheme) {
	} else {
		document.querySelector("body").style.backgroundColor = "#333333";

		let textToChangeColor = document.querySelectorAll(
			".title, .intro div p, .heading, .project-card-content h3, .project-card-content p"
		);

		for (let i = 0; i < textToChangeColor.length; i++) {
			textToChangeColor[i].style.color = "#f9faff";
		}
	}
}

toggleDarkTheme();
