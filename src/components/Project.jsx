import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faFileCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "./modal.scss";

function Project() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [ModalOpen2, setModalOpen2] = useState(false);

  return (
    <>
      <div className='section project' id='3'>
        <h2>
          <FontAwesomeIcon icon={faPen} className='faPen icon' />
          PROJECT
        </h2>
        <div className='project_container'>
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/Fia5g9.jpg'
              alt='Img'
              onClick={() => {
                setModalOpen(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen} onRequestClose={() => setModalOpen(false)}>
            <div className='project_01 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/Fia5g9.jpg' alt='Img' />
              </div>
              <div>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  ShoeShop / 신발 쇼핑몰
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  React, Redux
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  장바구니 기능과 Ajax 요청으로 데이터 불러오기를 구현한 사이트입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 22년 1월 제작
                </p>
              </div>
            </div>
            <Button
              variant='primary'
              onClick={() => {
                setModalOpen(false);
              }}>
              Close
            </Button>
          </Modal>

          {/* 2번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/VIK4w6.jpg'
              alt='Img'
              onClick={() => {
                setModalOpen2(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen2} onRequestClose={() => setModalOpen2(false)}>
            <div className='project_02 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/VIK4w6.jpg' alt='Img' />
              </div>
              <div>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  포트폴리오 웹사이트
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  React
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  게시판 기능을 구현한 지금 보고 계신 사이트입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 22년 3월 제작
                </p>
              </div>
            </div>
            <Button
              variant='primary'
              onClick={() => {
                setModalOpen2(false);
              }}>
              Close
            </Button>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Project;
