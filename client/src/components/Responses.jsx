import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchResponses } from "../services"
import './responses.css'

export default function Responses() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const getResponses = async () => {
      let work = await fetchResponses();
      setResponses(work)
    }
    getResponses();

  }, []);
  console.log("responses" , responses);
  return (
    <div className="background-container">
    <div className="responses-container">
      <h2 className="response-header">Click a Response to view Detail!</h2>
      <div className="response">
        {responses.map(response => (
          <div className="response-container">
            <div className="card-response-div">
              <div className="response-h2">
                <Link to={`/responses/${response.id}`} key={response.id}>
                  <h2 className="text-field-title">{response.fields.title}</h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}
