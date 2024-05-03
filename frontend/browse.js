const storyGrid = document.querySelector(".story-grid");
const categorySelect = document.getElementById("category-select");

// Function to create and display story cards
async function displayStories(filterCategory) {
	storyGrid.innerHTML = ""; // Clear existing story cards

	try {
		// fetching data
		const response = await fetch("http://localhost:3001/api/story");
		if (!response.ok) {
			throw new Error("Failed to fetch stories");
		}

		const stories = await response.json(); // Extract JSON data from the response

		const filteredStories = filterCategory
			? stories.filter(
					(story) => story.category.toLowerCase() === filterCategory
			  )
			: stories;

		filteredStories.forEach((story) => {
			const storyCard = document.createElement("div");
			storyCard.classList.add("story-card");
			storyCard.innerHTML = `
        <h3>${story.title}</h3>
        <p>${story.content}</p>
        <em>~${story.author.fullName}</em>
      `;
			storyGrid.appendChild(storyCard);
		});
	} catch (error) {
		console.error("Error fetching stories:", error);
	}
}

// Call the functions to display all stories initially
displayStories();

// Add event listener to the category select element
categorySelect.addEventListener("change", (event) => {
	const selectedCategory = event.target.value.toLowerCase();
	displayStories(selectedCategory);
});
