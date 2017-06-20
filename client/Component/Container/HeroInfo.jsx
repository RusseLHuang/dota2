import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroInfo extends Component {

  constructor(props) {
    super(props);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {
    const heroId = this.props.params["heroId"];
    const info = this.props.heroes.filter((data) => data.id == heroId);
    return info[0];
  }

  render() {
    const { id, name, icon, banner } = this.getInfo();
    return (
      <div className="hero-info-page">
        <div className="hero-banner">
          <img src={banner} alt={name}/>
        </div>
        <div className="body-container">
          <div className="inner-container">
            Testing box
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  heroes : state.heroes.heroes_list
});

export default connect(mapStateToProps)(HeroInfo);
