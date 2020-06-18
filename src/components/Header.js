import React from 'react';
import backgroundImage from 'startbootstrap-clean-blog/img/home-bg.jpg';

export default class extends React.Component {
  render() {
    const { title, subtitle, image } = this.props;
    return (
      <header className="masthead" style={{ backgroundImage: `url(${image ? image : backgroundImage})` }}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{title ? title : 'MARTA BLOG'}</h1>
                <span className="subheading">{subtitle ? subtitle : 'Projekt'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
