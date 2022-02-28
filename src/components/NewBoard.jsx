import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewBoard(props) {
  return (
    <div className='newBoard'>
      <input
        type='text'
        className='boardTitle'
        placeholder='제목을 입력하세요.'
        onChange={(event) => {
          props.setInputText(event.target.value);
        }}
      />
      <input type='text' className='boardText' placeholder='내용을 입력하세요.' />
      <Button
        variant='primary'
        onClick={() => {
          const boardTitleAry = [...props.boardTitle];
          boardTitleAry.unshift(props.inputText);
          props.setBoardTitle(boardTitleAry);
          console.log(boardTitleAry);
        }}>
        <Link to='/board'>작성 완료</Link>
      </Button>
    </div>
  );
}

export default NewBoard;
