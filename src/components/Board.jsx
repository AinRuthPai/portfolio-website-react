import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Board() {
  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  const submitComment = () => {
    Axios.post("http://localhost:3001/api/insert", {
      title: boardContent.title,
      content: boardContent.content,
    }).then(() => {
      alert("등록 완료!");
    });
  };

  const deleteComment = () => {
    Axios.delete("http://localhost:3001/api/delete", {}).then(() => {
      alert("삭제 완료!");
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value,
    });
  };

  return (
    <div className='board' id='4'>
      <h2>
        <FontAwesomeIcon icon={faPen} className='faPen icon' />
        COMMENT
      </h2>

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
                <button>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className='form-wrapper'>
        <input className='title-input' type='text' placeholder='제목' onChange={getValue} name='title' />
        <CKEditor
          editor={ClassicEditor}
          // data='내용을 입력해주세요.'
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setBoardContent({
              ...boardContent,
              content: data,
            });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button className='submit-button' onClick={submitComment}>
        작성 완료
      </button>
    </div>
  );
}

export default Board;
