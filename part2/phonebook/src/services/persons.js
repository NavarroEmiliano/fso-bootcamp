import axios from "axios";
const URL = "/api/persons";

const getAll = async () => {
  const request = axios.get(URL);
  const response = await request;
  return response.data;
};

const addPerson = async (body) => {
  const request = axios.post(URL, body);
  const response = await request;
  return response.data;
};

const removePerson = async (id) => {
  const request = axios.delete(`${URL}/${id}`);
  const response = await request;
  return response.data;
};

const updatePerson = async (personUpdate) =>{
const request = axios.put(`${URL}/${personUpdate.id}`, personUpdate)
  const response = await request;
  return response.data;
}

export default {
  getAll,
  addPerson,
  removePerson,
  updatePerson
};
