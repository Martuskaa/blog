import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  render() {
    const { post, isLast } = this.props;
    return ( 
      <React.Fragment>
        <div className="post-preview">
          <Link to={'/' + post.slug}>
            <h2 className="post-title">{post.title.rendered}</h2>
            <h3 className="post-subtitle" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.split(' <a href')[0] + '</p>' }} /> 
          </Link>
          <p className="post-meta">
            Posted by {post._embedded.author[0].name} on {new Date(post.date).toDateString()}
          </p>
        </div>
        {!isLast && <hr />}
      </React.Fragment>
    );
  }
}
