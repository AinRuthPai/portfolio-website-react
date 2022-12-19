import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCheck, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import styled from "styled-components";

const ModalThumbNail = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 4px 4px 4px 4px #e2e2e2;
  }
`;
const ModalContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 6px 4px #dadce0;

  > button {
    position: absolute;
    z-index: 99;
    font-size: 30px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  > button:nth-child(2) {
    left: 0;
    top: 50%;
  }
  > button:last-child {
    right: 0;
    top: 50%;
  }
`;

const ModalImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Btn = styled.button`
  background-color: #3d3d3d;
  color: white;
  font-size: 16px;
  padding: 10px 14px;
  margin: 0 14px;
  border: none;
  cursor: pointer;
`;

const ProjectText = styled.div`
  text-align: center;
`;

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
      <ModalThumbNail
        src={modalContent.img[0]}
        onClick={() => {
          setModalOpen(true);
        }}
      />

      <Modal isOpen={modalOpen} ariaHideApp={false} onRequestClose={() => setModalOpen(false)}>
        <ModalContainer>
          <ModalImgBox ref={moveImgRef} style={{ transform: "translateX", transition: "all 0.5s ease-in-out" }}>
            {modalContent.img.map((data, i) => {
              return <ModalImg src={data} key={i} />;
            })}
          </ModalImgBox>
          <button className='leftBtn' onClick={onMoveLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className='rightBtn' onClick={onMoveRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </ModalContainer>
        <ProjectText>
          <h3>
            <FontAwesomeIcon icon={faFileCode} />
            {modalContent.title}
          </h3>
          <div className='stack_container'>
            {modalContent.stack.map((stack) => {
              return <div className='stack'>{stack}</div>;
            })}
          </div>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            {modalContent.content}
          </p>

          <p>
            <FontAwesomeIcon icon={faCheck} />
            {modalContent.date}
          </p>
          <div className='btn_part'>
            <Btn
              onClick={() => {
                setModalOpen(false);
              }}>
              Close
            </Btn>
            <a href={modalContent.link} target='_blank' rel='noopener noreferrer'>
              <Btn className='btn_link'>Giuhub</Btn>
            </a>
          </div>
        </ProjectText>
      </Modal>
    </>
  );
}

export default ArticleProjectModal;
