import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let { img, title, description, newsUrl } = this.props
        return (
            <div className="NewsCard">
                <img src={img} alt="News" />
                <div className="cardBody">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>

        )
    }
}

export default NewsItems