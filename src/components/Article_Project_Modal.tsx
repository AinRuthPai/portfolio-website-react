import Modal from "react-modal";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCheck, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Data } from "./Section_Project";

export default function ArticleProjectModal({ modalContent }: { modalContent: Data }) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPos, setCurrentPos] = useState<number>(0);
  let moveImgRef = useRef<any>();

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

  useEffect(() => {
    if (modalOpen === false) {
      setCurrentPos(0);
    }
  }, [modalOpen]);

  useEffect(() => {
    const { current }: { current: any } = moveImgRef;
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
          <ModalImgBox ref={moveImgRef}>
            {modalContent.img.map((data: string, i: number) => {
              return <ModalImg src={data} key={i} />;
            })}
          </ModalImgBox>
          <button onClick={onMoveLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={onMoveRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </ModalContainer>
        <ProjectText>
          <h3>
            <FontAwesomeIcon icon={faFileCode} />
            {modalContent.title}
          </h3>
          <div>
            {modalContent.stack.map((stack: string, i: number) => {
              return <div key={i}>{stack}</div>;
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
          <div>
            <button
              onClick={() => {
                setModalOpen(false);
              }}>
              Close
            </button>
            <a href={modalContent.link} target='_blank' rel='noopener noreferrer'>
              <button className='btn_link'>Giuhub</button>
            </a>
          </div>
        </ProjectText>
      </Modal>
    </>
  );
}

const ModalThumbNail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 4px #e2e2e2;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ModalContainer = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 4px 4px 6px 4px #dadce0;

  > button {
    position: absolute;
    color: gray;
    font-size: 50px;
    transition: transform 0.1s ease-in;
    z-index: 99;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    :hover {
      color: black;
      transform: scale(1.05);
      cursor: pointer;
    }
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
  display: flex;
  width: 100%;
  height: 100%;
`;

const ModalImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ProjectText = styled.div`
  text-align: center;
  font-family: "Pretendard-Regular";

  button {
    margin: 0 14px;
    padding: 10px 14px;
    background-color: #3d3d3d;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;

    > div {
      margin: 6px 10px;
      padding: 4px 8px;
      background-color: #d8d9de;
      border-radius: 6px;
    }
  }
`;
