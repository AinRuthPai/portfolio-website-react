import ReactModal from "react-modal";

const MyModal = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div>modal</div>
    </ReactModal>
  );
};

export default MyModal;
