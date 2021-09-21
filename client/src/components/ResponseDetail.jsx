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
            <h1>Institute Name: {response.fields?.title}</h1>
            <h2>Recorded Type: {response.fields?.hypothesis}</h2>
            <h3>Year: {response.fields?.howTest}</h3>
            <h3>How Many Male Students: {response.fields?.whatSolve}</h3>
          <Link to={`/responses/${id}/edit`}><button>Edit Here</button></Link>
          <DeleteButton id={response.id}/>
          </div>
        
        
      </div>
    </div>
  )
}
