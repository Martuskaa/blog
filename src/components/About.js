import React from 'react';
import Header from './Header';

export default class extends React.Component {
  state = { singlePage: null };
  abortController = new AbortController();

  
  render() {
    const { singlePage } = this.state;

    if (singlePage && singlePage.length) {
      const page = singlePage[0];

      return (
        <React.Fragment>
          <Header title={page.title.rendered} subtitle=" " image={page._embedded['wp:featuredmedia'][0].source_url} />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </div>
          </div>
        </React.Fragment>
      );
    }

    return <Header title="Wczytywanie..." subtitle=" " />;
  }
}
