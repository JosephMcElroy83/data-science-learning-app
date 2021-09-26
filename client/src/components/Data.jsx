import Tableau from "./Tableau";
import './data.css'

export default function Data() {
  
  
  return (
    <div className="data-main-container">
      <div className="data-info-div">
        <h2>How to interact with Data</h2>
        <hr />
        <h3 className="h3-data-info">Click on any piece of data to highlight it.</h3>
        <h3 className="h3-data-info">You can click and drag to group highlight.</h3>
        <h3 className="h3-data-info">Bottom right of the graphic has arrow buttons to undo and redo.</h3>
        <h3 className="h3-data-info">If you have grouped or highlighted data, there is also a button you can select in the top right of the pop-up visual for extra details page and raw data chunk review/download. Please reference image below for exact button.</h3>
        <img className="img-tutorial" src="https://res.cloudinary.com/jm83/image/upload/v1632632503/Screen_Shot_2021-09-25_at_7.39.39_PM_zq572u.png" alt="example of data location on graphic" />
        <h3>button right most button is the fullscreen button to maximize the view</h3>

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
