import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Board from "./components/Board";
import Footer from "./components/Footer";
import NewBoard from "./components/NewBoard";

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          {props.modal === true ? <Board /> : null}
          <Footer />
        </Route>
        {/* 
        <Route exact path='/newboard'>
          <NewBoard />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
