import React, { Component } from 'react';
import { Link } from 'react-router';

class HeroesGrid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="heroes-grid-list">
        {
          lists.map(list =>
            <Link to={`/heroes/${list.id}`} className="hvr-grow-shadow">
              <span>
                <img src={list.icon} alt={list.name} width="59px" height="33px"/>
              </span>
            </Link>
          )
        }
      </div>
    );
  }

}

export default HeroesGrid;
