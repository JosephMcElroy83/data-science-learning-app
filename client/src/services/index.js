import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/data`;
const responseURL = `https://api.airtable.com/v0/${airtableBase}/responses`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchData = async () => {
  const res = await axios.get(URL, config);
  console.log(res.data);
  return res.data.records;
}

export const fetchResponses = async () => {
  const res = await axios.get(responseURL, config);
  console.log(res.data)
  return res.data.records;
};

export const fetchResponse = async (id) => {
  const res = await axios.get(`${responseURL}/${id}`, config);
  return res.data

}

export const deleteResponse = async (id) => {
  const res = await axios.delete(`${responseURL}/${id}`, config);
  return res.data
}