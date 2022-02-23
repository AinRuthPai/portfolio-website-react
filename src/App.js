import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          <Footer />
        </Route>

        <Route path='/board'>
          <Board />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
