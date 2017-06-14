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
              <p>Invoker</p>
            </section>
            <hr/>
            <div className="heroes-list">
              <div id="strength">
                <div className="col-header">
                  <span>Strength</span>
                </div>
                <HeroesGrid lists={this.props.sentinel_str}/>
              </div>
              <div id="agility">
                <div className="col-header">
                  <span>Agility</span>
                </div>
                <HeroesGrid lists={this.props.sentinel_agi}/>
              </div>
              <div id="intelligence">
                <div className="col-header">
                  <span>Intelligence</span>
                </div>
                <HeroesGrid lists={this.props.sentinel_int}/>
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
  sentinel_str : state.heroes.sentinel_str,
  sentinel_agi : state.heroes.sentinel_agi,
  sentinel_int : state.heroes.sentinel_int,
  scourge_str : state.heroes.scourge_str,
  scourge_agi : state.heroes.scourge_agi,
  scourge_int : state.heroes.scourge_int
})

export default connect(mapStateToProps)(Heroes);
