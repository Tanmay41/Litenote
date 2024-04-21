const form = document.getElementById("story-form");
const nameInput = document.getElementById("name");
const storyInput = document.getElementById("story");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value && storyInput.value) {
    // send the story to the server
    sendStory();
  }
});

function sendStory() {
  // create a new story object
  const story = {
    name: nameInput.value,
    story: storyInput.value,
  };

  // send the story to the server using fetch or axios
  fetch("https://darknote.com/api/stories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(story),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // show a success message
        showMessage("Your story has been submitted successfully!");
      } else {
        // show an error message
        showMessage("There was an error submitting your story. Please try again later.");
      }
    });
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

