import React from 'react';
import { Link } from 'react-router';

export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <div className="nav-bar-bg">
          <div className="nav-bar">
            <span className="dota-logo">
              <img src="/images/dotalogo.png"/>
            </span>
            <Link to={`/heroes`} role="button" aria-haspopup="true" aria-expanded="false">
              <span className="nav-bar-item">
                Heroespedia
              </span>
            </Link>
            <Link to={`/`} role="button" aria-haspopup="true" aria-expanded="false">
              <span className="nav-bar-item">
                Home
              </span>
            </Link>
          </div>
        </div>
        <div className="nav-bar-shadow">
        </div>
        { this.props.children }
      </div>
    )
  }
}

export default Index;
