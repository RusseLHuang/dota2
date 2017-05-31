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
            <div className="dota-logo">
              <img src="/images/dotalogo.png"/>
            </div>
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

export default Index;
