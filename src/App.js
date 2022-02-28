import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Board from "./components/Board";
import Footer from "./components/Footer";
import NewBoard from "./components/NewBoard";
import { useState } from "react";

function App() {
  const [boardTitle, setBoardTitle] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          <Footer />
        </Route>

        <Route exact path='/board'>
          <Board boardTitle={boardTitle} />
        </Route>

        <Route exact path='/board/newboard'>
          <NewBoard boardTitle={boardTitle} setBoardTitle={setBoardTitle} inputText={inputText} setInputText={setInputText} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
