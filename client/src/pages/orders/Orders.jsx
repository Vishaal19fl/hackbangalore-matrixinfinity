import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Multi Freelancers working</th>
                <th>Message</th>
                
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img
                      className="image"
                      src={order.img}
                      alt=""
                      onClick={() => openModal(order.img)}
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>
                    <img
                      className="message"
                      src="./img/message.png"
                      alt=""
                      onClick={() => handleContact(order)}
                    />
                  </td>
                  <td></td>
                  <td>
                    <button onClick={() => openModal(order.progressImage)}>
                      View Progress
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <img
                    className="image"
                    src="/img/webdev1.jpg"
                    alt=""
                  />
                </td>
                <td>Logo Development</td>
                <td>Rs.2999</td>
                <td style={{lineHeight : '25px'}}>
                    <p>1. Venkatesh</p>
                    <p>2. Vamsi</p>
                </td>

                <td>
                  <Link to='/message/123'>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                  />
                  </Link>
                </td>
                
                <td>
                  <button className="btn" onClick={() => openModal('/img/work-progress.jpg')}>
                    View Progress
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img src='https://cdn.discordapp.com/attachments/725646168759205929/1238888820116820079/image.png?ex=6640eca0&is=663f9b20&hm=c3bf1c49b6a0a3a350407c7977c2aecbd7f461e2c1bbc283684d17f9d736cc36&' alt="Progress" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
