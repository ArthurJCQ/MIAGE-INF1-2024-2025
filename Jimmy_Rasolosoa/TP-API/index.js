// Base API URL
const BASE_API_URL = "https://www.reddit.com/r/sidehustle/top.json";

// DOM elements that I need to interact with
const postList = document.getElementById("post-list");
const fetchButton = document.getElementById("fetch-btn");
const postCountInput = document.getElementById("post-count");

// Function to fetch and display posts
async function fetchRedditPosts(postCount) {
  console.log("Fetching posts...");
  try {
    // Construct the API URL with the user-specified post count
    const apiUrl = `${BASE_API_URL}?limit=${postCount}&t=year`;

    // Fetch the data
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Clear existing posts
    postList.innerHTML = "";

    addData(data);
    // Add the fetched posts to the list with hyperlinks
  } catch (error) {
    console.error("Error fetching posts:", error);
    postList.innerHTML = "<li>Error: Unable to fetch data.</li>";
  }
}

// Function to add data to the list - Outside the main function for better readability
const addData = (data) => {
  // Map the posts to an array of objects with title and number
  const posts = data.data.children.map((post, index) => ({
    no: index + 1,
    title: post.data.title,
    permalink: `https://www.reddit.com${post.data.permalink}`,
  }));

  // Update the DOM using the mapped posts array
  posts.forEach((post) => {
    const postItem = document.createElement("li");
    const postLink = document.createElement("a");
    postLink.href = post.permalink;
    postLink.textContent = `${post.no}. ${post.title}`;
    postLink.target = "_blank";
    postItem.appendChild(postLink);
    postList.appendChild(postItem);
  });
};

// Add event listener to the Fetch button
fetchButton.addEventListener("click", () => {
  // Get the post count from the input field and if nothing is entered, default to 10
  const postCount = parseInt(postCountInput.value) || 10;
  fetchRedditPosts(postCount);
});
