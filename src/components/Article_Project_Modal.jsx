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
    const { current } = moveImgRef;
    if (current) {
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
    if (currentPos !== modalContent.img.length - 1) {
      setCurrentPos(currentPos + 1);
    } else {
      setCurrentPos(modalContent.img.length - 1);
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
          src={modalContent.img[0]}
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
              {modalContent.img.map((data, i) => {
                return <img src={data} alt='Img' key={i} />;
              })}
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
            <div className='stack_container'>
              {modalContent.stack.map((stack) => {
                return <div className='stack'>{stack}</div>;
              })}
            </div>
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
          <button
            onClick={() => {
              setModalOpen(false);
            }}>
            Close
          </button>
          <a href={modalContent.link} target='_blank' rel='noopener noreferrer'>
            <button className='btn_link'>Go to Giuhub</button>
          </a>
        </div>
      </Modal>
    </>
  );
}

export default ArticleProjectModal;
