import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faFileCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "./Project.scss";
import "../App.scss";

function Project() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [ModalOpen2, setModalOpen2] = useState(false);
  const [ModalOpen3, setModalOpen3] = useState(false);
  const [ModalOpen4, setModalOpen4] = useState(false);
  const [ModalOpen5, setModalOpen5] = useState(false);
  const [ModalOpen6, setModalOpen6] = useState(false);

  return (
    <>
      <section className='section project' id='3'>
        <h2>
          <FontAwesomeIcon icon={faPen} className='faPen icon' />
          PROJECT
        </h2>
        <article className='project_container'>
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
              <div className='project_text'>
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
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/react-shoppingmall' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>

          {/* 2번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/tSckA6.jpg'
              alt='Img'
              onClick={() => {
                setModalOpen2(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen2} onRequestClose={() => setModalOpen2(false)}>
            <div className='project_02 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/tSckA6.jpg' alt='Img' />
              </div>
              <div className='project_text'>
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
                  1인 개발 / 22년 2월 제작
                </p>
              </div>
            </div>
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/portfolio-website-react' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen2(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>
        </article>

        <article className='project_container2'>
          {/* 3번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/9GvRDw.png'
              alt='Img'
              onClick={() => {
                setModalOpen3(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen3} onRequestClose={() => setModalOpen3(false)}>
            <div className='project_03 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/9GvRDw.png' alt='Img' />
              </div>
              <div className='project_text'>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  KaKaoTalk
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  HTML, CSS
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  카카오톡 클론 코딩입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 21년 8월 제작
                </p>
              </div>
            </div>
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/kokoa-clone-2021' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen3(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>

          {/* 4번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/cNoXGY.png'
              alt='Img'
              onClick={() => {
                setModalOpen4(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen4} onRequestClose={() => setModalOpen4(false)}>
            <div className='project_04 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/cNoXGY.png' alt='Img' />
              </div>
              <div className='project_text'>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  그림판
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  HTML, CSS, JavaScript
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  배경 채우기 & 그리기, 선 굵기, 지우개, 색 선택 기능이 구현된 그림판입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 22년 3월 제작
                </p>
              </div>
            </div>
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/paintBoardJs' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen4(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>
        </article>

        <article className='project_container3'>
          {/* 5번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/QmjggH.png'
              alt='Img'
              onClick={() => {
                setModalOpen5(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen5} onRequestClose={() => setModalOpen5(false)}>
            <div className='project_03 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/QmjggH.png' alt='Img' />
              </div>
              <div className='project_text'>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  테트리스
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  HTML, CSS, JavaScript
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  주로 활용되는 canvas 대신에 DOM을 활용한 테트리스 게임입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 22년 3월 제작
                </p>
              </div>
            </div>
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/tetris' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen5(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>

          {/* 6번째 */}
          <div className='thumbnail'>
            <img
              src='https://ifh.cc/g/DmAwdR.jpg'
              alt='Img'
              onClick={() => {
                setModalOpen6(true);
              }}
            />
          </div>

          <Modal isOpen={ModalOpen6} onRequestClose={() => setModalOpen6(false)}>
            <div className='project_04 div_project'>
              <div className='project_imgbox'>
                <img src='https://ifh.cc/g/DmAwdR.jpg' alt='Img' />
              </div>
              <div className='project_text'>
                <h3>
                  <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
                  영화 순위 사이트
                </h3>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  NextJS
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  영화 API 데이터를 fetch하여 제작한 웹사이트입니다.
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
                  1인 개발 / 22년 3월 제작
                </p>
              </div>
            </div>
            <div className='btn_part'>
              <a href='https://github.com/AinRuthPai/nextjs-lecture' target='_blank'>
                <Button variant='primary' className='project_btn btn_link'>
                  Giuhub
                </Button>
              </a>
              <Button
                variant='primary'
                className='project_btn'
                onClick={() => {
                  setModalOpen6(false);
                }}>
                Close
              </Button>
            </div>
          </Modal>
        </article>
      </section>
    </>
  );
}

export default Project;
