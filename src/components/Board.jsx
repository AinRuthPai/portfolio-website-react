import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import { Table } from "react-bootstrap";

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

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      title: boardContent.title,
      content: boardContent.content,
    }).then(() => {
      alert("등록 완료!");
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
    <div className='board'>
      <h3>게시글 작성</h3>
      {/* <div className='container'>
        {viewContent.map((element) => (
          <div className='title'>
            <h2>{element.title}</h2>
            <div className='cont'>{ReactHtmlParser(element.content)}</div>
          </div>
        ))}
      </div> */}
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
      <button className='submit-button' onClick={submitReview}>
        작성 완료
      </button>
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>글 제목</th>
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
    </div>
  );
}

export default Board;
