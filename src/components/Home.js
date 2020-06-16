import React from 'react';
import Header from './Header';

export default class extends React.Component {
  state = { posts: null };
  abortController = new AbortController();
  render() {
      return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div>POSTY Z API
            </div>
          </div>
        </div>

        <hr />
      </React.Fragment>
    );
  }
}
