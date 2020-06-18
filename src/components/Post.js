import React from 'react';
import Header from './Header';

export default class extends React.Component {
  state = { singlePost: null };
  abortController = new AbortController();
  componentDidMount() {
    fetch('https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com/posts?slug=' + this.props.match.params.slug, {
      signal: this.abortController.signal,
    })
      .then(res => res.json())
      .then(body => {
        this.setState({ singlePost: body });
      })
      .catch(err => {
        console.error(err);
      });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { singlePost } = this.state;

    if (singlePost && singlePost.length) {
      const post = singlePost[0];

      return (
        <React.Fragment>
          <Header title={post.title.rendered} subtitle={new Date(post.date).toDateString()} image={post.jetpack_featured_media_url} />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </div>
        </React.Fragment>
      );
    }

    if (singlePost && singlePost.length === 0) {
      return <Header title="Nie znaleziono strony" subtitle=" " />;
    }

    return <Header title="Wczytywanie..." subtitle=" " />;
  }
}
