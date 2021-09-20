import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Data from "./components/Data";
import AnalysisQuestions from "./components/AnalysisQuestions";
import Responses from "./components/Responses";
import { Route } from 'react-router-dom'
import "./App.css"


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        
      <div className="main-container">  
        <Route exact path="/">
          <div className="home-div">
          <Home />
          </div>
          </Route>
          
        <Route path ="/data">
          <div className="data-div">
          <Data />
          </div>
        </Route>

        <Route path="/questions">
        <div className="analysis-div">
        <AnalysisQuestions />
          </div>
        </Route>
          

        <Route path="/form">
          <div className="form-div">
          <Form />
          </div>
        </Route>
          

        <Route path="/responses">
          <div className="responses-div">
          <Responses />
          </div>
        </Route>

        </div>
      </div>
    </>
  );
}

export default App;
