import { useHistory } from "react-router"
import { deleteResponse } from "../services"

export default function DeleteButton(props) {
  const history = useHistory();

  const handleDelete = async () => {
    await deleteResponse(props.id);
    history.push("/responses")
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
