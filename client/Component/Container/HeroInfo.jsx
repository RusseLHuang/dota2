import React, { Component } from 'react';

class HeroInfo extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.params["heroId"]);
  }

  render() {
    return (
      <div className="hero-info-page">
        <div className="hero-banner">
          <img alt={} src=""/>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default HeroInfo;
