import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/responses`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function EditResponse() {
  const [title, setTitle] = useState("");
  const [hypothesis, setHypothesis] = useState("");
  const [whatSolve, setWhatSolve] = useState("");
  const [howTest, setHowTest] = useState("");

  const { id } = useParams();
  const history = useHistory();


  useEffect(() => {
    const getResponse = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      const { fields } = res.data;
      setTitle(fields.title)
      setHypothesis(fields.hypothesis)
      setWhatSolve(fields.whatSolve)
      setHowTest(fields.howTest)
    }
    getResponse();
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      hypothesis,
      whatSolve,
      howTest,
    };
    const res = await axios.put(`${URL}/${id}`, { fields }, config)
    toast.info("Edited Response!")
    history.push(`/responses/${res.data.id}`);
  };

  return (
    <div>
      <h2>Edit Response</h2>
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
        type={"Edit"}

      />
    </div>
  )
}
