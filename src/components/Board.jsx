import { Table, Button } from "react-bootstrap";
import NewBoard from "./NewBoard";

function Board() {
  return (
    <>
      <Table striped bordered hover className='board'>
        <thead>
          <tr>
            <th>#</th>
            <th>글제목</th>
            <th>작성일자</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>

      <Button href='/board/newboard' variant='primary' className='boardWriteBtn'>
        글쓰기
      </Button>
    </>
  );
}

export default Board;
