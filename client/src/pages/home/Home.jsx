import React from "react";
import { useEffect, useState } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";

import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards,cards2, cards3, projects, projects2, projects3 } from "../../data";
import { Link } from "react-router-dom";
import CatCard2 from "../../components/catCard2/CatCard2";
import Dashboard from "../../components/dashboard/Dashboard";
import PricingClient from "../../components/pricingClient/PricingClient";



function Home() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  

  return (
    <div className="home">


      {currentUser?.isSeller ? <Dashboard /> : <Featured />} 
      
      <div className="slide-title">
      {currentUser?.isSeller ? <h2>Featured WavePoints </h2> : <h2>Featured Freelancers 🔒 </h2> }

      </div>
      {currentUser?.isSeller ? <Slide slidesToShow={5} arrowsScroll={1}>
        {cards3.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> :
      <Slide slidesToShow={5} arrowsScroll={1}>
      {cards.map((card) => (
        <CatCard key={card.id} card={card} onClick={() => {}} />
      ))}
    </Slide>
     }

     

      <div className="slide-title">
        <h2>Categories</h2>
      </div>
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards2.map((card) => (
          <CatCard2 key={card.id} card={card} />
        ))}
      </Slide>

      {currentUser?.isSeller && <div className="features dark">
      <div className="container">
    <div className="item">
        <h1>Gain an advantage over your peers 
</h1>
        
    </div>
    <div className="item">
        <h1>
        WavePoint provides you with a chance to grow and develop you skills

        </h1>
        <p>
        Are you ready to take your freelancing career to new heights? Look no further than Wave point, where we empower freelancers like you to thrive in today's dynamic market.


        </p>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Prove your skills with certification courses and assessments

        </div>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Gain invaluable insights and guidance from seasoned professionals

        </div>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Network, learn, collaborate and gather potential clients in our virtual events
        </div>
    </div>
</div>

      </div> }

       <div className="slide-title2">
       {currentUser?.isSeller ? <h2>Mentorship Services 🔒</h2> : <h2>Featured Services</h2> }
      </div> 
      {currentUser?.isSeller ? <Slide slidesToShow={4} arrowsScroll={1}>
        {projects2.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> : <Slide slidesToShow={4} arrowsScroll={1}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> }

      

      
     {!currentUser?.isSeller && <div className="features">
        <div className="container">
        <div className="item">
    <h1>Join us in Empowering Rural Workers and Artisans</h1>
    <div className="title">
    Inclusive Opportunities
    </div>
    <p>
    Our platform empowers rural artisans by connecting them with clients, creating economic opportunities previously out of reach.


    </p>
    <div className="title">
    Partnering with Self-Help Groups

</div>
<p>
We partner with rural self-help groups, serving as trustworthy intermediaries connecting artisans with clients, ensuring fair representation and support.


</p>

    <div className="title">
    Economic Empowerment
    </div>
    <p>
    Our platform empowers rural artisans globally, fostering income generation and economic independence through technology.
    </p>
    
<button className="btn1">Register as a volunteer</button>
</div>

          <div className="item">
            <video src="/img/video1.mp4" autoPlay muted loop playsInline />
          </div>
        </div>
      </div> }
  

     

      {currentUser?.isSeller && <div className="slide-title2">
        <h2>Certification and Assessment</h2>
      </div> }
      
      {currentUser?.isSeller && <Slide slidesToShow={5} arrowsScroll={1}>
        {cards2.map((card) => (
          <CatCard2 key={card.id} card={card} />
        ))}
      </Slide> }

      {currentUser?.isSeller && <div className="slide-title2">
        <h2>Workshops and Virtual Events</h2>
      </div> }

      <Slide slidesToShow={4} arrowsScroll={1}>
        {projects3.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>


      <PricingClient />
       
      
      
    </div>
  );
}

export default Home;
