import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Board from "./components/Board";
import Footer from "./components/Footer";
import NewBoard from "./components/NewBoard";
import { useState } from "react";

function App() {
  const [boardTitle, setBoardTitle] = useState([]);
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          <Footer />
        </Route>

        <Route exact path='/board'>
          <Board boardTitle={boardTitle} id={id} setId={setId} />
        </Route>

        <Route exact path='/board/newboard'>
          <NewBoard
            boardTitle={boardTitle}
            setBoardTitle={setBoardTitle}
            inputText={inputText}
            setInputText={setInputText}
            id={id}
            setId={setId}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
