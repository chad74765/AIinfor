console.log("Hello, AI Information!");
// This is a placeholder for the function that will display the news articles
function displayNews(news) {
    const newsContainer = document.getElementById('news');

    news.forEach(article => {
        const articleElement = document.createElement('article');
        const titleElement = document.createElement('h2');
        const linkElement = document.createElement('a');

        titleElement.textContent = article.title;
        linkElement.href = article.url;
        linkElement.textContent = 'Read more';

        articleElement.appendChild(titleElement);
        articleElement.appendChild(linkElement);
        newsContainer.appendChild(articleElement);
    });
}

// This is a placeholder for the function that will fetch the news articles
function fetchNews() {
    // Fetch the news articles from the API
    // Then call displayNews with the fetched articles
}

// Call fetchNews when the page loads
window.onload = fetchNews;

