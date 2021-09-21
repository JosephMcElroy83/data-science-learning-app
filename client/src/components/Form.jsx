import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import 'react-toastify/dist/ReactToastify.css';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/responses`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Form() {

  const [title, setTitle] = useState("");
  const [hypothesis, setHypothesis] = useState("");
  const [whatSolve, setWhatSolve] = useState("");
  const [howTest, setHowTest] = useState("");  

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      hypothesis,
      whatSolve,
      howTest,
    };

    const res = await axios.post(URL, { fields }, config);
    toast("Created Response!")
    history.push(`/responses/${res.data.id}`);

  }

  return (
    <div>
      <h3>Create a New Response! </h3>
      <FormInput
        title={title}
        setTitle={setTitle}
        hypothesis={hypothesis}
        setHypothesis={setHypothesis}
        whatSolve={whatSolve}
        setWhatSolve={setWhatSolve}
        howTest={howTest}
        setHowTest={setHowTest}
        handleSubmit={handleSubmit}
        type={"Create"}

      />
    </div>
  )
}
