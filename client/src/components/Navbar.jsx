import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-div">
      <Link to="/"><h1>Data Science Learning App</h1></Link>

        <Link to="/data"><h3>Data</h3></Link>
        <Link to="/questions"><h3>Analysis Questions</h3></Link>
        <Link to="/form"><h3>Form</h3></Link>

    </div>
  )
}
