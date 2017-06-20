import React, { Component } from 'react';
import { Link } from 'react-router';
import { setCurrentHoverHero } from 'Action/Heroes.js';
import { connect } from 'react-redux';

class HeroesGrid extends Component {

  constructor(props) {
    super(props);
    this.setOnHoverHero = this.setOnHoverHero.bind(this);
  }

  setOnHoverHero(e) {
    const name = e.target.getAttribute("alt");
    this.props.triggerHoverHero(name);
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="heroes-grid-list">
        {
          lists.map(list =>
            <Link to={`/heroes/${list.id}`} className="hvr-grow-shadow">
              <span>
                <img onMouseOver={ this.setOnHoverHero } src={list.icon} alt={list.name} width="59px" height="33px"/>
              </span>
            </Link>
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  triggerHoverHero : (data) => {
    dispatch(setCurrentHoverHero(data))
  }
})

export default connect(null,mapDispatchToProps)(HeroesGrid);
