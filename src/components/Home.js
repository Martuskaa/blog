import React from 'react';
import HomePost from './HomePost.js';
import Header from './Header';

export default class extends React.Component {
  state = { posts: null };
  abortController = new AbortController();

  componentDidMount() {
    fetch('https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com/posts?_embed', { signal: this.abortController.signal })
      .then(res => res.json())
      .then(body => {
        this.setState({ posts: body });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {posts && posts.map((post, index) => <HomePost key={post.id} post={post} isLast={index === posts.length - 1} />)}
            </div>
          </div>
        </div>

        <hr />
      </React.Fragment>
    );
  }
}
