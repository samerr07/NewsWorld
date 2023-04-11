import React, { useEffect, useState } from 'react'
import "./home.scss"
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from './Spinner';


const Home = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=86cbc37f87754046a6a07cb06f9e5a0f')
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="home">
         <div className="news-carousel">
      <h1>Top News Headlines</h1>

      {loading && <Spinner/>}

      <Slider className='slider' {...sliderSettings}>
        {news.map((article, index) => (
          <div key={index} className="news-item">
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        
    </div>
   
   
  )
}

export default Home

