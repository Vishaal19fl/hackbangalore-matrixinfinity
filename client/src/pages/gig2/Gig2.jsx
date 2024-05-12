import React, { useState } from 'react'
import "./Gig2.scss"
import { Link } from 'react-router-dom'
import { Slider } from 'infinite-react-carousel'
import GooglePayButtonComponent from "../../components/googlePay/GooglePay";

export const Gig2 = () => {
  const [selectedTab, setSelectedTab] = useState('basic');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Services > Web Development ></span>
          <h1>Create a static or dynamic web application according to specifications</h1>
          <div className="user">
            <img
              className="pp"
              src="/img/surya4.png"
              alt=""
            />
            <span>Surya Prakash</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://assets.awwwards.com/awards/images/2021/09/creative-layouts-thumb3.jpg"
              alt=""
            />
            <img
              src="/img/webdev1.jpg"
              alt=""
            />
            <img
              src="/img/webdev3.png"
              alt=""
            />
          </Slider>
          <h2>About This Service</h2>
          <p>
            Create a Static or dynamic web application using react js and node js. The hosting charges will handled by the client who commissioned the web application.
          </p>
          <div className="seller">
            <h2>About The Freelancer</h2>
            <div className="user">
              <img
                src="/img/surya4.png"
                alt=""
              />
              <div className="info">
                <span>Surya Prakash</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Feb 2024</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Skills</span>
                  <span className="desc">UI/UX, React, Javascript</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Tamil</span>
                </div>
              </div>
              <hr />
              <p>
              As a seasoned freelancer specializing in React, JavaScript, and UI/UX design, I bring a unique blend of technical expertise and creative flair to every project I undertake. With a passion for crafting intuitive user experiences and clean, efficient code, I thrive in translating client visions into reality. With years of experience in the industry, I have honed my skills in front-end development, leveraging the latest technologies and best practices to deliver seamless, responsive web applications. Whether it's building interactive interfaces, optimizing performance, or refining user journeys, I am dedicated to exceeding client expectations and delivering solutions that resonate with end-users.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/seller4.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Joseph</span>
                  <div className="country">
                    {/* <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    /> */}
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                A beautiful UI design and excelent UX. He delivered a perfect website
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Monisha</span>
                  <div className="country">
                    {/* <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    /> */}
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The quality and speed of delivery is unmatched. Had a wonderful experience working with him. 
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/svishaal.jpg/"
                  alt=""
                />
                <div className="info">
                  <span>Shakithiyan </span>
                  <div className="country">
                    
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Best value for money. Amazing execution.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="tabs">
            <div className={`tab ${selectedTab === 'basic' ? 'active' : ''}`} onClick={() => handleTabChange('basic')}>
              Regular
            </div>
            <div className={`tab ${selectedTab === 'intermediate' ? 'active' : ''}`} onClick={() => handleTabChange('intermediate')}>
              Intermediate
            </div>
            <div className={`tab ${selectedTab === 'elite' ? 'active' : ''}`} onClick={() => handleTabChange('elite')}>
              Elite
            </div>
          </div>
        <div className="user">
            <img
              className="pp"
              src="/img/surya4.png"
              alt=""
            />
            <span>Surya Prakash</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <div className="price">
          
            <h3>Web application development</h3>
            <br/>
            {selectedTab === "basic" && <h2>Rs. 2999</h2>}
            {selectedTab === "intermediate" && <h2>Rs. 4999</h2>}
            {selectedTab === "elite" && <h2>Rs. 7999</h2>}

          </div>
          <p>
          Static or dynamic web application using react js and node js.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>7 Days Delivery</span>
            </div>
            {/* <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div> */}
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/tick1.png" alt="" />
              <span>Client specifications</span>
            </div>
            <div className="item">
              <img src="/img/tick1.png" alt=""  width='50px'/>
              <span>Unlimited revisions</span>
            </div>
            <div className="item">
              <img src="/img/tick1.png" alt="" />
              <span>Best quality</span>
            </div>
            {/* <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div> */}
            
          </div>
          <p className='scroll'>Scroll down for more info</p>
         
          <GooglePayButtonComponent price={'2999'}  />
         

        </div>
      </div>
    </div>
  );
}
