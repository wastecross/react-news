import React, { useEffect, useState } from 'react';
import './News.css';
import Cards from '../../components/Cards';
import axios from 'axios';

const News = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        'http://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-10-15&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc'
      )
      .then((response) => {
        setData(response);
      });
  }, [setData]);

  const info = data.data;

  const cards =
    data.status === 200 ? (
      info.articles.map((news) => (
        <Cards title={news.title} image={news.urlToImage} author={news.author} content={news.content} />
      ))
    ) : (
      <span> Error </span>
    );

  return (
    <div className='News'>
      <div className='News-container'>{cards}</div>
    </div>
  );
};

export default News;
