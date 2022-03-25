import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
          <Project />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
