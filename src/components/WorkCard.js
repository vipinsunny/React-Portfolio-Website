import "./WorkCardStyle.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="work-container">
      {/* <h1 className="project-heading">Projects</h1> */}
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="image" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <button
                className="btn"
                onClick={() => openModal(currentImageIndex)}
              >
                View
              </button>
              <a
                href={props.source}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
          {showModal && (
            <div className="image-modal">
              <div className="modal-content">
                <img src={props.view[currentImageIndex]} alt="Project" />
                <button className="close-btn" onClick={closeModal}>
                  Close
                </button>
                {currentImageIndex > 0 && (
                  <button
                    className="prev-btn"
                    onClick={() => openModal(currentImageIndex - 1)}
                  >
                    Previous
                  </button>
                )}
                {currentImageIndex < props.view.length - 1 && (
                  <button
                    className="next-btn"
                    onClick={() => openModal(currentImageIndex + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
