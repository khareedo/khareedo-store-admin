import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const register = ({name, username, email, password}) => {
  return axios.post(BACKEND_URL, {
    name, username, email, password
  });
}

const login = ({ username, password}) => {
  return axios.post(BACKEND_URL, {
    name, username, email, password
  });
}

const AuthService = {register, login};

export default AuthService;