import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroesGrid from 'Component/Presentational/HeroesGrid.jsx';
import { fetchHeroes } from 'Action/Heroes.js';

class Heroes extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchHeroes());
  }

  render() {
    return (
      <div className="heroes-container">
        <section className="heroes-box">
          <div className="heroes-box-top"></div>
          <div className="heroes-box-inner">
            <section className="heroes-header">
              <p>{ this.props.onHover_Hero }</p>
            </section>
            <hr/>
            <div className="heroes-list">
              <div id="strength">
                <div className="col-header">
                  <span>Strength</span>
                </div>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "sentinel" && data.attr == "strength")}/>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "scourge" && data.attr == "strength")}/>
              </div>
              <div id="agility">
                <div className="col-header">
                  <span>Agility</span>
                </div>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "sentinel" && data.attr == "agility")}/>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "scourge" && data.attr == "agility")}/>
              </div>
              <div id="intelligence">
                <div className="col-header">
                  <span>Intelligence</span>
                </div>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "sentinel" && data.attr == "intelligence")}/>
                <HeroesGrid lists={this.props.heroes_list.filter((data) => data.team == "scourge" && data.attr == "intelligence")}/>
              </div>
            </div>
          </div>
          <div className="heroes-box-bottom-shadow">
            <img src="/images/centercolbox_bottom_shadow.png" alt="bottomshadow"/>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  heroes_list : state.heroes.heroes_list,
  onHover_Hero : state.heroes.onHover_Hero
})

export default connect(mapStateToProps)(Heroes);
