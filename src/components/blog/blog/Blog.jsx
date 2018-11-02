import React, {Component} from 'react';
import Blog_Scales_Basics from '../blogs/Blog_Scales_Basics.jsx';
import {Link} from 'react-router-dom';
import './Blog.css';

const blogEntriesMapped = {
  'd3-scales (Basics)': <Blog_Scales_Basics />
}

export default class Blog extends Component {
  state = {
    blogSelected: 'd3-scales (Basics)'
  }

  handleBlogSelection = (event) => {
    event.preventDefault();
    this.setState({
      blogSelected: event.target.value
    });
  }
  render () {
    return (
      <div className="blog-wrapper">
        <header>Blog</header>
        <main className="blog-grid">
          <aside>
            <ul onClick={e => this.handleBlogSelection(e)}>
              <li value="d3-scales (Basics)">
                d3-scales (Basics)
              </li>
              <li>Post 2</li>
              <li>Post 3</li>
              <li>Post 4</li>
              <li>Post 5</li>
            </ul>
          </aside>
          <article>
            {blogEntriesMapped[this.state.blogSelected]}
          </article>
        </main>
      </div>
    )
  }
};
  
