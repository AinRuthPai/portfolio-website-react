import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCheck, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

function ArticleProjectModal({ modalContent }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);
  let moveImgRef = useRef();

  useEffect(() => {
    if (modalOpen === false) {
      setCurrentPos(0);
    }
  }, [modalOpen]);

  useEffect(() => {
    if (moveImgRef.current) {
      const { current } = moveImgRef;
      if (currentPos + 1) {
        current.style.transform = `translateX(-${currentPos}00%)`;
        current.style.transition = `all 0.5s ease-in-out`;
      } else if (currentPos - 1) {
        current.style.transform = `translateX(${currentPos}00%)`;
        current.style.transition = `all 0.5s ease-in-out`;
      }
    }
  }, [currentPos]);

  const onMoveRight = () => {
    if (currentPos !== 3) {
      setCurrentPos(currentPos + 1);
    } else {
      setCurrentPos(3);
    }
  };

  const onMoveLeft = () => {
    if (currentPos !== 0) {
      setCurrentPos(currentPos - 1);
    } else {
      setCurrentPos(0);
    }
  };

  return (
    <>
      <div className='thumbnail'>
        <img
          src={modalContent.img}
          alt='Img'
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>

      <Modal isOpen={modalOpen} ariaHideApp={false} onRequestClose={() => setModalOpen(false)}>
        <div className='project_01 div_project'>
          <div className='project_carousel'>
            <div className='project_imgbox' ref={moveImgRef} style={{ transform: "translateX", transition: "all 0.5s ease-in-out" }}>
              <img src={modalContent.img} alt='Img' />
              <img src={modalContent.img} alt='Img' />
              <img src={modalContent.img} alt='Img' />
              <img src={modalContent.img} alt='Img' />
            </div>
            <button className='leftBtn' onClick={onMoveLeft}>
              <FontAwesomeIcon icon={faAngleLeft} className='faAngleLeft' />
            </button>
            <button className='rightBtn' onClick={onMoveRight}>
              <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' />
            </button>
          </div>
          <div className='project_text'>
            <h3>
              <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
              {modalContent.title}
            </h3>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {modalContent.stack}
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {modalContent.content}
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {modalContent.date}
            </p>
          </div>
        </div>
        <div className='btn_part'>
          <a href={modalContent.link} target='_blank' rel='noopener noreferrer'>
            <button className='project_btn btn_link'>Giuhub</button>
          </a>
          <button
            className='project_btn'
            onClick={() => {
              setModalOpen(false);
            }}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ArticleProjectModal;
