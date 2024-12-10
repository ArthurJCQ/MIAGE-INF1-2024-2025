const BASE_API_URL = "https://www.reddit.com/r/sidehustle/top.json";

const postList = document.getElementById("post-list");
const fetchButton = document.getElementById("fetch-btn");
const postCountInput = document.getElementById("post-count");

async function fetchRedditPosts(postCount) {
  console.log("Fetching posts...");
  try {
    const apiUrl = `${BASE_API_URL}?limit=${postCount}&t=year`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    postList.innerHTML = "";

    addData(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    postList.innerHTML = "<li>Error: Unable to fetch data.</li>";
  }
}

const addData = (data) => {
  const posts = data.data.children.map((post, index) => ({
    no: index + 1,
    title: post.data.title,
    permalink: `https://www.reddit.com${post.data.permalink}`,
  }));

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

fetchButton.addEventListener("click", () => {
  const postCount = parseInt(postCountInput.value) || 10;
  fetchRedditPosts(postCount);
});
