import React from 'react'
import "./newsItem.scss"

const NewsItem = (props) => {

  let { title, description, image, newsUrl, author, date, source } = props;
  return (
    <div className="news-cart">
      
      <img src={image} alt="news" className="news-image"  />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <p className="card-text">
            <small class="text-muted">
              By {!author ? "Unknown" : author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary card-link"
          >
            Read More
          </a>
      </div>
    </div>
  )
}

export default NewsItem
