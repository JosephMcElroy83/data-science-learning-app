import Tableau from "./Tableau";
import './data.css'

export default function Data() {
  
  
  return (
    <div className="data-main-container">
      <div className="data-info-div">
        <h2>How to interact with Data</h2>
        <hr />
        <h3>Click on any piece of data to highlight it.</h3>
        <h3>You can click and drag to group highlight.</h3>
        <h3>Bottom right of the graphic has arrow buttons to undo and redo.</h3>
        <h3>If you have grouped or highlighted data, you can select to view indepth in the top right of the pop-up visual for extra details page.</h3>
        <img src="/images/dataExample.png" alt="example of data location on graphic" />
        <h3>button right of most button is the fullscreen button to maximize the view</h3>

      </div>
      <div className="tableau-background">
         <div className="tablea-main-container-border">
          <div className="tableau-main-container">
            <Tableau />
          </div>
        </div>
      </div>
    </div>
  )
}
