import axios from "axios"

export const API = axios.create({
  baseURL: process.env.GATSBY_API_URL,
})
