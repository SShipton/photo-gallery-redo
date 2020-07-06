import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photos from '../photos.json'
import { render } from 'react-dom'
class PhotoListPhoto extends Component {
  render() {
    return (
      <div key={this.props.index} className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <div className="card-content">
              <figure className="image">
                <Link
                  to={`/${this.props.theNameOfTheCategoryWeWantToLookAt}/${this.props.index}`}
                >
                  <img
                    src={this.props.photo.imageURL}
                    alt={this.props.photo.title}
                  />
                </Link>
                <figcaption>
                  <Link
                    to={`/${this.props.theNameOfTheCategoryWeWantToLookAt}/${this.props.index}`}
                  >
                    {this.props.photo.title}
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="content" />
          </div>
        </div>
      </div>
    )
  }
}
export class PhotoList extends Component {
  render() {
    console.log(this.props)
    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
      .theNameOfTheCategoryWeWantToLookAt
    const category = photos[theNameOfTheCategoryWeWantToLookAt]
    const categoryPhotos = category.photos
    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/${theNameOfTheCategoryWeWantToLookAt}`}>
                {category.title}
              </Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">{category.title}</h3>
        <h4 className="subtitle">{category.description}</h4>
        <div className="columns is-multiline">
          {categoryPhotos.map((photo, index) => (
            <PhotoListPhoto
              key={index}
              index={index}
              photo={photo}
              theNameOfTheCategoryWeWantToLookAt={
                theNameOfTheCategoryWeWantToLookAt
              }
            />
          ))}
        </div>
      </div>
    )
  }
}
