import React from 'react';

export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="nav-bar-bg">
          <div className="nav-bar">
            <span className="dota-logo">
              <img src="/images/dotalogo.png"/>
            </span>
            <span className="nav-bar-item">
              Heroespedia
            </span>
            <span className="nav-bar-item">
              Home
            </span>
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

export default Index;
