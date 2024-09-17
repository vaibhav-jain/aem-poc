// Function to fetch a random dog image from Dog CEO API
async function fetchDogImage() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    // Find the block where the image will be inserted
    const dogImageBlock = document.querySelector('.apis block');
    dogImageBlock.src = data.message; // Update image source with the fetched image URL
  } catch (error) {
    console.error('Error fetching dog image:', error);
  }
}

// Run the function to fetch a random dog image when the page is loaded
document.addEventListener('DOMContentLoaded', fetchDogImage);
