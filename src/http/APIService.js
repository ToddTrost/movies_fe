import axios from 'axios';
// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'https://ttrost.pythonanywhere.com';/* 'http://localhost:8000' http://127.0.0.1:8000 or  'https://yourPythonAnywhereName.pythonanywhere.com'*/


export class APIService {
  constructor() {
  }

  getMovie(param_pk) {
    const url = `${API_URL}/api/movies/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.get(url, {headers: headers});
  }
  
  getMovieList() {
    const url = `${API_URL}/api/movies/`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.get(url, {headers: headers});
  }

  addNewMovie(movie){
    const url = `${API_URL}/api/movies/`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.post(url, movie, {headers: headers});
  }

  updateMovie(movie){
    const url = `${API_URL}/api/movies/${movie.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.put(url, movie, {headers: headers});
  }

  deleteMovie(movie_Pk){
    const url = `${API_URL}/api/movies/${movie_Pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.delete(url, {headers: headers});
  }

  authenticateLogin(credentials) {
    const url = `${API_URL}/api/`;
    return axios.post(url, credentials);
  }

  registerUser(credentials) {
     const url = `${API_URL}/register/`;
     credentials.customusername = credentials.username
     return axios.post(url, credentials);
  }
}
