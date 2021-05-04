import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out how we did in the Fairfax Invite!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="card--items">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
