const storyGrid = document.querySelector('.story-grid');
const categorySelect = document.getElementById('category-select');

// Sample data for categories
const categories = ['Fiction', 'Non-Fiction', 'Romance', 'Adventure', 'Memoir'];

// Sample data for stories
const stories = [
  {
    title: 'The Endless Journey',
    excerpt: 'A thrilling tale of adventure and self-discovery.',
    category: 'Adventure'
  },
  {
    title: 'Love Conquers All',
    excerpt: 'A heartwarming romance that will melt your heart.',
    category: 'Romance'
  },
  {
    title: 'The Untold Truth',
    excerpt: 'A powerful memoir that exposes the harsh realities of life.',
    category: 'Memoir'
  },
  {
    title: 'The Mythical Realm',
    excerpt: 'Enter a world of fantasy and magic in this captivating novel.',
    category: 'Fiction'
  },
  {
    title: 'The Science Behind Miracles',
    excerpt: 'Explore the fascinating world of science through real-life stories.',
    category: 'Non-Fiction'
  }
];

// Function to populate categories in the select element
function populateCategories() {
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.toLowerCase();
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

// Function to create and display story cards
function displayStories(filterCategory = '') {
  storyGrid.innerHTML = ''; // Clear existing story cards

  const filteredStories = filterCategory
    ? stories.filter(story => story.category.toLowerCase() === filterCategory)
    : stories;

  filteredStories.forEach(story => {
    const storyCard = document.createElement('div');
    storyCard.classList.add('story-card');
    storyCard.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.excerpt}</p>
    `;
    storyGrid.appendChild(storyCard);
  });
}

// Call the functions to populate categories and display all stories initially
populateCategories();
displayStories();

// Add event listener to the category select element
categorySelect.addEventListener('change', (event) => {
  const selectedCategory = event.target.value.toLowerCase();
  displayStories(selectedCategory);
});