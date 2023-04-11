import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';
import "./newsPage.scss"
import Spinner from './Spinner';

const NewsPage = (props) => {

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=86cbc37f87754046a6a07cb06f9e5a0f&pageSize=30`)
      .then(res => {
        setLoading(true)
        setNews(res.data.articles);
        console.log(res.data.articles)
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

 

  return (
    <div className="newsPage">
          <h1 className='titl'>Top {props.category} Headlines</h1>
    <div className='newsPage1'>
    {loading && <Spinner className="spin"/>}
      
      {
        news.map((e)=>{
          return (
            <NewsItem
            title={e.title ? e.title.slice(0, 45) : ""}
            description={
                      e.description
                        ? e.description.slice(0, 88)
                        : ""
                    }
            image={e.urlToImage}
            author={e.author}
            date={e.publishedAt}
            source={e.source.name}
            newsUrl={e.url}
            />
          )
        })
      }
    </div>
    </div>
    
    
  )
}

export default NewsPage


