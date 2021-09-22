import { useHistory } from "react-router"
import { deleteResponse } from "../services"
import { toast } from "react-toastify";

export default function DeleteButton(props) {
  const history = useHistory();

  const handleDelete = async () => {
    await deleteResponse(props.id);
    toast.error("Deleted Response!")
    history.push("/responses")
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
