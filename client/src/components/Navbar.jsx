import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-div">
      <Link to="/"><h1 className="app-title"><span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg></span>Data Science Learning App<span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg></span></h1></Link>

        <Link className="a-tag" to="/data"><h3 className="data-link-h3">Data</h3></Link>
        <Link className="a-tag" to="/questions"><h3 className="question-link-h3">Analysis Questions</h3></Link>
        <Link className="a-tag form-link" to="/form"><h3 className="form-link-h3">Form</h3></Link>
        <Link className="a-tag" to="/responses"><h3 className="responses-link-h3">Responses</h3></Link>

    </div>
  )
}
