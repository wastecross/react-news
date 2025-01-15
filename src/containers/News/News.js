import React, { useEffect, useState } from "react";
import "./News.css";
import Cards from "../../components/Cards/Cards";
import { newsArticles } from "../../fixtures/news.fixture";

const News = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-10-15&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc",
        { method: "GET" }
      );

      if (response.ok) {
        const result = await response.json();

        setData(result);
      }
    };

    getNews();
  }, [setData]);

  const info = data.data;

  const cards =
    data.status === 200
      ? info.articles
          .slice(0, 11)
          .map((news, index) => (
            <Cards
              title={news.title}
              image={news.urlToImage}
              author={news.author}
              content={news.content}
              url={news.url}
              key={news.publishedAt}
              color={(index + 1) % 2 === 0 ? "even" : "odd"}
            />
          ))
      : newsArticles
          .slice(0, 11)
          .map((news, index) => (
            <Cards
              title={news.title}
              image={news.urlToImage}
              author={news.author}
              content={news.content}
              url={news.url}
              key={news.publishedAt}
              color={(index + 1) % 2 === 0 ? "even" : "odd"}
            />
          ));

  return (
    <div className="News">
      <div className="News-container">{cards}</div>
    </div>
  );
};

export default News;
