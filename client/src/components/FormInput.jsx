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
      <label>Title:</label>
      <input
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)} />
      <br />
      <label>Hypothesis:</label>
      <input
        type="text"
        value={props.hypothesis}
        onChange={(e) => props.setHypothesis(e.target.value)} />
      <br />
      <label>What Does This Solve?:</label>
      <input
        type="text"
        value={props.whatSolve}
        onChange={(e) => props.setWhatSolve(e.target.value)} />
      <br />
      <label>How Would You Test This?:</label>
      <input
        type="text"
        value={props.howTest}
        onChange={(e) => props.setHowTest(e.target.value)} />
      <br />
      <button disabled={checkIfDisabled()}>{props.type} Response</button>
    </form>
  )

}
