import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

export const peopleService = {
  getPeople(signal) {
    return axiosInstance.get("/people", { signal })
  },
  addPerson({ name, email }, signal) {
    return axiosInstance.post("/people", { name, email }, { signal })
  },
  getPerson(id, signal) {
    return axiosInstance.get(`/people/${id}`, { signal })
  },
}
