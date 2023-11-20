import axios from "axios";
const URL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

const addPerson = (body) => {
  const request = axios.post(URL, body);
  return request.then((response) => response.data);
};

const removePerson = (id) => {
  const request = axios.delete(`${URL}/${id}`);
  return request.then((response) => response.data);
};

const updatePerson = (personUpdate) =>{
const request = axios.put(`${URL}/${personUpdate.id}`, personUpdate)
return request.then(response=> response.data)
}

export default {
  getAll,
  addPerson,
  removePerson,
  updatePerson
};
