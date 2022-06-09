import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

function ArticleProjectModal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function carousel() {}

  function onLeftMove() {}
  function onRightMove() {}

  return (
    <>
      <div className='thumbnail'>
        <img
          src={props.project.img}
          alt='Img'
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div className='project_01 div_project'>
          <div className='project_imgbox'>
            <img src={props.project.img} alt='Img' />
            <img src={props.project.img} alt='Img' />
            <img src={props.project.img} alt='Img' />
            <img src={props.project.img} alt='Img' />
          </div>
          <button className='left'>left</button>
          <button className='right'>right</button>
          <div className='project_text'>
            <h3>
              <FontAwesomeIcon icon={faFileCode} className='faFileCode icon' />
              {props.project.title}
            </h3>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {props.project.stack}
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {props.project.content}
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className='faCheck icon' />
              {props.project.date}
            </p>
          </div>
        </div>
        <div className='btn_part'>
          <a href={props.project.link} target='_blank' rel='noopener noreferrer'>
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
