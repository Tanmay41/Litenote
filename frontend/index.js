const storyGrid = document.querySelector('.story-grid');

// Sample data for featured stories
const featuredStories = [
  {
    title: 'The Journey of a Lifetime',
    excerpt: 'Join me on a thrilling adventure through the mountains and valleys of Nepal.'
  },
  {
    title: 'Overcoming Adversity',
    excerpt: 'Read how I overcame a life-changing illness and found strength within.'
  },
  {
    title: 'Love at First Sight',
    excerpt: 'A heartwarming tale of two souls destined to be together.'
  },
  {
    title: 'The Art of Mindfulness',
    excerpt: 'Discover the transformative power of mindfulness in this inspiring story.'
  }
];

// Function to create and display story cards
function displayFeaturedStories() {
  featuredStories.forEach(story => {
    const storyCard = document.createElement('div');
    storyCard.classList.add('story-card');
    storyCard.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.excerpt}</p>
    `;
    storyGrid.appendChild(storyCard);
  });
}

// Call the function to display featured stories
displayFeaturedStories();