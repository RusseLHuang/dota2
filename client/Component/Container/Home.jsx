import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="home-banner"></div>
        <div className="home-event">
          <div className="ti-story">
            <section>
              <h1>The International 2017</h1>
              <h2>$ 12,635,672</h2>
              <h2>Prize pool</h2>
              <p>The International 2017 is the third Major of the 2017 season and the seventh annual edition of The International.
                The tournament will be hosted in Seattle for the sixth consecutive year.
                The Main Event is held for the fourth consecutive time at KeyArena,
                a multi-purpose arena in Seattle Center with a total seating capacity of over 17,000.</p>
            </section>
          </div>
        </div>
        <section className="ti-banner">
        </section>
      </section>
    );
  }
}

export default Home;
