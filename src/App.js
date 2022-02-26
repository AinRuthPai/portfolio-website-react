import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Board from "./components/Board";
import Footer from "./components/Footer";
import NewBoard from "./components/NewBoard";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          <Footer />
        </Route>

        <Route exact path='/board'>
          <Board />
        </Route>

        <Route exact path='/board/newboard'>
          <NewBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
