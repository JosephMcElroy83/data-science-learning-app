import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import 'react-toastify/dist/ReactToastify.css';
import './form.css'

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
    toast.success("Created Response!")
    history.push(`/responses/${res.data.id}`);

  }

  return (
    <div className="code-banner">
    <div className="form-container">
      <h2 className="header">Create Your Response! </h2>
      <br />
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
        labelTitle={"Title: "}
        labelQuestion01={"What is Your Hypothesis? "}
        labelQuestion02={"What Does This Solve? "}
        labelQuestion03={"How Would You Test This? "}
        type={"Create"}

      />
      </div>
    </div>
  )
}
