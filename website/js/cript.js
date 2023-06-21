// 使用jQuery的AJAX请求从GNews API获取新闻数据
$.ajax({
  url: 'https://gnews.io/api/v4/search?q=AI&lang=en&token=d8261fce8b37aa3bc2d194e3818e7a24',
  method: 'GET',
  success: function(response) {
    // 处理API响应，提取新闻数据
    var articles = response.articles;
    
    // 在页面上显示新闻内容
    var newsContainer = $('#news-container');
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var newsItem = $('<div>').addClass('news-item');
      var title = $('<h2>').text(article.title);
      var description = $('<p>').text(article.description);
      var source = $('<p>').text(article.source.name);
      
      newsItem.append(title, description, source);
      newsContainer.append(newsItem);
    }
  },
  error: function() {
    // 处理错误情况
    console.log('Failed to fetch news data.');
  }
});

