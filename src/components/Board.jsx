import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Board(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>글제목</th>
            <th>작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.setId}</td>
            {props.boardTitle.map((post, i) => {
              return <td key={i}>{post}</td>;
            })}
            <td>작성자</td>
            <td>22.02.28</td>
          </tr>
        </tbody>
      </Table>

      <Button variant='primary' className='boardWriteBtn'>
        <Link to='/board/newboard'>글쓰기</Link>
      </Button>
    </>
  );
}

export default Board;
