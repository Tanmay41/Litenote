import axios from "axios";

const passwordInput = document.getElementById("passwordInput");
const usernameInput = document.getElementById("usernameInput");

console.log("as");

async function login() {
	console.log("trying");
	axios.post("http://localhost:3001/api/user/login", {
		username: "JohnDoe",
		password: "Hi",
	});
}
