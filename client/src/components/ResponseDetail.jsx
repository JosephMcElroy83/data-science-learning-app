import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchResponse } from "../services";
import { useParams } from "react-router";
import DeleteButton from "./DeleteButton";
import './responsesDetail.css'

export default function ResponseDetail() {
  const [response, setResponse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let work = await fetchResponse(id);
      console.log("response detail" , work);
      setResponse(work);
    }
    getData();
  }, [id]);

  console.log("response outside" ,response);
  if (!id) {
    <h1>Loading . . .</h1>
  }

  return (
    <div className="response-details">
      
          <br />
          <div className="detail-container" key={response?.id}>
          <h1 className="title">Title</h1>
          <h2>{response.fields?.title}</h2>
          <br />
          <h1 className="hypothesis">What is Your Hypothesis?</h1>
          <h2>{response.fields?.hypothesis}</h2>
          <br />
          <h1 className="solve">What Does This Solve?</h1>
          <h3>{response.fields?.whatSolve}</h3>
          <br />
          <h1 className="how-test">How Would You Test This?</h1>
          <h3>{response.fields?.howTest}</h3>
        <br />
        <div className="button-container">
          <Link to="/responses"><button>Check All Responses</button></Link>
          <Link to={`/responses/${id}/edit`}><button>Edit This Here</button></Link>
          <DeleteButton id={response.id}/>
        </div>
          </div>
        
        
      
    </div>
  )
}
