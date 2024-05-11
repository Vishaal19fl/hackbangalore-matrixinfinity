import React from 'react'
import "./Home.scss"

export const Home = () => {
  return (
    <div className='home'>
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> 
    </div>
  );
};

