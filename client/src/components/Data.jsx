import { useState, useEffect } from "react";
import { fetchData } from "../services";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData())
    }
    getData();
  }, []);
  
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="data-placeholder" className="src" />
      </div>

      <div>
        {data.map(info => (
          <div className="data-all" key={info?.id}>
            <h1>{info?.fields.instituteName}</h1>
            <h2>{info?.fields.recordType}</h2>
            <h3>{info?.fields.year}</h3>
            <h3>How Many Male Students: {info?.fields.male}</h3>
            <h3>How Many Female Students: {info?.fields.female}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
