import axios from 'axios';

const register = ({name, username, email, password}) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL, {
    name, username, email, password
  });
}

const login = ({ username, password}) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL, {
    name, username, email, password
  });
}

const AuthService = {register, login};

export default AuthService;