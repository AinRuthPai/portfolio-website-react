import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useState } from "react";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className='thumbnail'>
        <img
          src={props.id === props.key ? props.project.img : null}
          alt='Img'
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div className='project_01 div_project'>
          <div className='project_imgbox'>
            <img src={props.id === props.key ? props.project.img : null} alt='Img' />
          </div>
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
          <a href={props.project.link} target='_blank'>
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
    </>
  );
}

export default Card;
