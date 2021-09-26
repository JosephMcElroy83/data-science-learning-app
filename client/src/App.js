import { Route } from 'react-router-dom'
import { Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Data from "./components/Data";
import AnalysisQuestions from "./components/AnalysisQuestions";
import Responses from "./components/Responses";
import ResponseDetail from "./components/ResponseDetail";
import EditResponse from "./components/EditResponse";
import "./App.css"


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        
        <div className="main-container">
          <Switch>
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
            
            <Route exact path="/responses">
              <div className="responses-div">
              <Responses />
              </div>
              </Route>
              
            <Route exact path="/responses/:id">
              <div className="responses-div">
              <ResponseDetail />
              </div>
            </Route>
            
            <Route exact path="/responses/:id/edit">
              <div className="form-div">
              <EditResponse />
              </div>
            </Route>
          </Switch>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
