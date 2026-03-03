import React from 'react'

function NewsItem({title, description, src, url}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
        <img src={src ? src : "https://img.freepik.com/free-vector/global-broadcast-breaking-news-banner-with-global-map_1017-59836.jpg"} style={{height: "200px", width: "328px"}} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description ? description.slice(0, 90): "This is description of this News Article since we are unable to fetch the real description it is dummy description"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem