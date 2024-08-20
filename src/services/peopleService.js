import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

export const peopleService = {
  getPeople() {
    return axiosInstance.get("/people")
  },
  addPerson({ name, email }) {
    return axiosInstance.post("/people", { name, email })
  },
}
