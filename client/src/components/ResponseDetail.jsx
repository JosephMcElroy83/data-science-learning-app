import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchResponse } from "../services";
import { useParams } from "react-router";
import DeleteButton from "./DeleteButton";

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
    <div>
      <div>
        
          <div className="data-all" key={response?.id}>
            <h1>Title: {response.fields?.title}</h1>
            <h3>What is Your Hypothesis? {response.fields?.hypothesis}</h3>
            <h3>What Does This Solve? {response.fields?.howTest}</h3>
            <h3>How Would You Test This? {response.fields?.whatSolve}</h3>
          <Link to="/responses"><button>Check All Responses</button></Link>
          <Link to={`/responses/${id}/edit`}><button>Edit This Here</button></Link>
          <DeleteButton id={response.id}/>
          </div>
        
        
      </div>
    </div>
  )
}
