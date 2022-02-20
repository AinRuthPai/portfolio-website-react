import { ListGroup, Badge, Button } from "react-bootstrap";
import { useState } from "react";

function Board() {
  const [postTitle, setPostTitle] = useState(["html", "css", "js"]);

  return (
    <>
      {postTitle.map((post, i) => {
        return (
          <div className='board'>
            <ListGroup as='ul'>
              <ListGroup.Item as='li' className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold' key={i}>
                    {post}
                  </div>
                  Cras justo odioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                </div>
                <Badge variant='primary' pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
      <Button variant='primary' className='boardWriteBtn'>
        글쓰기
      </Button>{" "}
    </>
  );
}

export default Board;
