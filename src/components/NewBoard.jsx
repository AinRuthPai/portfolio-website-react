import { Button } from "react-bootstrap";

function NewBoard() {
  return (
    <div className='newBoard'>
      <input type='text' className='boardTitle' placeholder='제목을 입력하세요.'></input>
      <input type='text' className='boardText' placeholder='내용을 입력하세요.'></input>
      <Button variant='primary'>작성 완료</Button>
    </div>
  );
}

export default NewBoard;
