import axios from "axios";

const academicFetch = axios.create({
  baseURL: "https://ironshape.onrender.com/",
  headers: {
    "Content-Type": "application/json" 
  }
})

export default academicFetch
