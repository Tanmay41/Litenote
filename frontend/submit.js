import axios from "axios";
const form = document.getElementById("story-form");
const nameInput = document.getElementById("name");
const storyInput = document.getElementById("story");
const categoryInput = document.getElementById("category");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (nameInput.value && storyInput.value) {
		// send the story to the server
		sendStory();
	}
});

async function sendStory() {
	console.log("doing");
	// send the story to the server using fetch or axios
	const result = await postData("http://localhost:3001/api/story/submit", {
		title: nameInput.value,
		content: storyInput.value,
		category: categoryInput.options[categoryInput.selectedIndex].text,
	});

	console.log("did");

	showMessage(result);
}

function showMessage(message) {
	// create a new message element
	const messageEl = document.createElement("div");
	messageEl.textContent = message;
	messageEl.classList.add("message");

	// add the message to the page
	document.body.appendChild(messageEl);

	// animate the message
	messageEl.animate(
		[
			{ opacity: 0, transform: "translateY(-20px)" },
			{ opacity: 1, transform: "translateY(0)" },
		],
		{ duration: 300, easing: "ease-in-out" }
	);

	// remove the message after 3 seconds
	setTimeout(() => {
		messageEl.animate(
			[
				{ opacity: 1, transform: "translateY(0)" },
				{ opacity: 0, transform: "translateY(20px)" },
			],
			{ duration: 300, easing: "ease-in-out" }
		);
		setTimeout(() => {
			messageEl.remove();
		}, 300);
	}, 3000);
}

async function postData(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	});
	return response.json();
}
