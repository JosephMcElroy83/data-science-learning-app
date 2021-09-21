import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchResponses} from "../services"

export default function Responses() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const getResponses = async () => {
      let work = await fetchResponses();
      console.log("fetchResponses" , work);
      setResponses(work)
    }
    getResponses();

  }, []);
  console.log("responses" , responses);
  return (
    <div>
      <div>
        {responses.map(response => (
          <Link to={`/responses/${response.id}`} key={response.id}>
            <h2>{response.fields.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
