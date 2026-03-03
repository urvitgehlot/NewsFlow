import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function NewsBoard({category}) {
    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setArticles(data.articles)
            setIsLoading(false);
        })
        .catch(error => {
            console.error("Error fetching news articles:", error);
        });
    }, [category])
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {isLoading ? (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) : articles.map((news, index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard