const storyGrid = document.querySelector(".story-grid");

// Function to create and display story cards
async function displayFeaturedStories() {
	// Sample data for featured stories
	const response = await fetch(
		"http://localhost:3001/api/story?featured=true"
	);

	const featuredStories = await response.json();

	featuredStories.forEach((story) => {
		const storyCard = document.createElement("div");
		storyCard.classList.add("story-card");
		storyCard.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.content}</p>
      <em>By ${story.author.fullName}</em>
    `;
		storyGrid.appendChild(storyCard);
	});
}

// Call the function to display featured stories
displayFeaturedStories();
