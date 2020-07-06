import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
export class Header extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <Link to="/">Small things that I enjoy!</Link>
            </h1>
            <h2 className="subtitle">A fun photo gallery to look through</h2>
          </div>
        </div>
      </section>
    )
  }
}
