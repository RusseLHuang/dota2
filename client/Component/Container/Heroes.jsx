import React, { Component } from 'react';

class Heroes extends Component {

  render() {
    return (
      <div className="heroes-container">
        <section className="heroes-box">
          <div className="heroes-box-top-shadow">
            <img src="/images/centercolbox_top_shadow.png" alt="topshadow"/>
          </div>
          <div className="heroes-box-top">
            <img src="/images/centercolbox_top.png" alt="topborder"/>
          </div>
          <div className="heroes-box-inner">
            <p>Test</p>
          </div>
          <div className="heroes-box-bottom">
            <img src="/images/centercolbox_bottom.png" alt="bottomborder"/>
          </div>
          <div className="heroes-box-bottom-shadow">
            <img src="/images/centercolbox_bottom_shadow.png" alt="bottomshadow"/>
          </div>
        </section>
      </div>
    );
  }

}

export default Heroes;
