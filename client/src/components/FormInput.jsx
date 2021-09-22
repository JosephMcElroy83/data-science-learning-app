export default function FormInput(props) {

  const checkIfDisabled = () => {
    if (props.title &&
      props.hypothesis &&
      props.whatSolve &&
      props.howTest !== "") {
      return false;
    } else { return true }
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <label>{props.labelTitle}</label>
      <input
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)} />
      <br />
      <label>{props.labelQuestion01}</label>
      <input
        type="text"
        value={props.hypothesis}
        onChange={(e) => props.setHypothesis(e.target.value)} />
      <br />
      <label>{props.labelQuestion02}</label>
      <input
        type="text"
        value={props.whatSolve}
        onChange={(e) => props.setWhatSolve(e.target.value)} />
      <br />
      <label>{props.labelQuestion03}</label>
      <input
        type="text"
        value={props.howTest}
        onChange={(e) => props.setHowTest(e.target.value)} />
      <br />
      <button disabled={checkIfDisabled()}>{props.type} Response</button>
    </form>
  )

}
