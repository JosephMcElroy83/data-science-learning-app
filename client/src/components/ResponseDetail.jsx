import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchResponse } from "../services";

export default function ResponseDetail() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setResponse(await fetchResponse())
    }
    getData();
  }, []);
  
  return (
    <div>
      <div>
        {response.map(info => (
          <div className="data-all" key={info?.id}>
            <h1>Institute Name: {info?.fields.instituteName}</h1>
            <h2>Recorded Type: {info?.fields.recordType}</h2>
            <h3>Year: {info?.fields.year}</h3>
            <h3>How Many Male Students: {info?.fields.male}</h3>
            <h3>How Many Female Students: {info?.fields.female}</h3>
            <Link to="/"><button>Edit Here</button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}
