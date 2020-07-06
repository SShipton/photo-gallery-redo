import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
export class CategoryList extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>
                <Link to={`/${this.props.categoryName}`}>
                  {this.props.title}
                </Link>
              </h2>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={this.props.imageURL} alt={this.props.title} />
            </figure>
          </div>
        </div>
      </div>
    )
  }
}
render()
{
  ;<div className="columns is-mobile">
    {categoryNames.map((categoryName, index) => {
      const categoryDetails = photos[categoryName]
      const firstPhoto = categoryDetails.photos[0]
      return (
        <Category
          key={index}
          categoryName={categoryName}
          title={categoryDetails.title}
          description={categoryDetails.description}
          imageURL={firstPhoto.imageURL}
        />
      )
    })}
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2>
              <Link to="/keyboards">Keyboards</Link>
            </h2>
            <h2>
              <Link to="/bows">Bows</Link>
            </h2>
            <h2>
              <Link to="/cookbooks">Cookbooks</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
}
