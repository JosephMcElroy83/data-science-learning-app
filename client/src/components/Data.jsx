import Tableau from "./Tableau";
import './data.css'

export default function Data() {
  
  
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="data-placeholder" className="src" />
      </div>
      <div>
        What the data is, how to navigate the data, 
      </div>
      <div className="tableau-main-container">
        <Tableau />
      </div>
    </div>
  )
}
