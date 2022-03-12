import { useState, useEffect } from "react";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Table } from "react-bootstrap";

function NewBoard() {
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  const deleteBoard = (idx) => {
    Axios.delete("http://localhost:3001/api/delete", {
      idx: viewContent.idx,
    }).then((idx) => {
      setViewContent(viewContent.filter((viewContent) => viewContent.idx !== idx));
      alert("삭제 완료!");
    });
    return setViewContent;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <th>#</th>
        <th>댓글</th>
        <th>내용</th>
        <th>삭제</th>
      </thead>
      <tbody>
        {viewContent.map((element) => (
          <tr>
            <td>{element.idx}</td>
            <td>{element.title}</td>
            <td>{ReactHtmlParser(element.content)}</td>
            <td>
              <button onClick={deleteBoard}>❌</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default NewBoard;
