import axios from "axios";

export const loginapi = async (bodyreq) => {
    return axios.post("http://localhost:3000/api/login", bodyreq)
};