import './formInput.css'

export default function FormInput(props) {

  const checkIfDisabled = () => {
    if (props.title &&
      props.hypothesis &&
      props.whatSolve &&
      props.howTest !== "") {
      return false;
    } else {
      return true
    }
  }

  return (
    <div className="form-input-container">
      <form onSubmit={props.handleSubmit}>
        <br />
        <div className="labels">
        <label>{props.labelTitle}</label>
        </div>
        <input
          autoFocus
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)} />
        <br />
        <div className="labels">
        <label>{props.labelQuestion01}</label>
        </div>
        <input
          type="text"
          value={props.hypothesis}
          onChange={(e) => props.setHypothesis(e.target.value)} />
        <br />
        <div className="labels">
        <label>{props.labelQuestion02}</label>
        </div>
        <textarea
          type="text"
          value={props.whatSolve}
          onChange={(e) => props.setWhatSolve(e.target.value)} />
        <br />
        <div className="labels">
        <label>{props.labelQuestion03}</label>
        </div>
        <textarea
          type="text"
          value={props.howTest}
          onChange={(e) => props.setHowTest(e.target.value)} />
        <br />
        <div className="submit-container">
        <button className="submit-button" disabled={checkIfDisabled()}>{props.type} Response</button>
        </div>
      <div className="form-notes">
        <br />
        <h3 className="friendly-reminder">If you need some friendly reminders, please check out Analysis Questions.</h3>
        <p className="friendly-ptag">Start with a question first! You can revise it later.</p>
        <p className="friendly-ptag friendly-ptag-two">Don't forget the basis of your assumptions about data!</p>
      </div>
      </form>
    </div>
  )

}
