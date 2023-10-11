import Modal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faCheck, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Data } from './Section_Project';

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

    const customStyles = {
        content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    };

    return (
        <>
            <ModalThumbNail
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                <img src={modalContent.img[0]} />
                <p>{modalContent.title}</p>
            </ModalThumbNail>

            <Modal
                isOpen={modalOpen}
                style={customStyles}
                ariaHideApp={false}
                onRequestClose={() => setModalOpen(false)}
            >
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
                        <FontAwesomeIcon icon={faFileCode} /> {modalContent.title}
                    </h3>

                    <p>
                        <FontAwesomeIcon icon={faCheck} />
                        {modalContent.content}
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faCheck} />
                        {modalContent.date}
                    </p>

                    <div>
                        {modalContent.stack.map((stack: string, i: number) => {
                            return <div key={i}>{stack}</div>;
                        })}
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setModalOpen(false);
                            }}
                        >
                            Close
                        </button>
                        <a href={modalContent.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn_link">Giuhub</button>
                        </a>
                    </div>
                </ProjectText>
            </Modal>
        </>
    );
}

const ModalThumbNail = styled.div`
    width: 95%;
    height: 95%;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 4px #e2e2e2;
    text-align: center;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 45vh;
        margin-top: 28px;
    }

    > img {
        width: 100%;
        height: 80%;
        object-fit: contain;
        overflow: hidden;
    }
`;

const ModalContainer = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 4px 4px 6px 4px #dadce0;
    border-radius: 14px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 50vh;
    }

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
    font-family: 'Pretendard-Regular';

    @media screen and (max-width: 1024px) {
        width: 70vw;
        margin: 0 auto;
    }

    > div:nth-child(4) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        > div {
            margin: 6px 10px;
            padding: 4px 8px;
            background-color: #d8d9de;
            border-radius: 6px;
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            margin: 10px auto;
            /* font-size: 10px; */
        }
    }

    button {
        margin: 30px 14px;
        padding: 10px 14px;
        background-color: #242424;
        color: white;
        font-size: 16px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
    }

    > div:last-child > button {
        background-color: #6e6e70;
        color: white;
    }
`;
