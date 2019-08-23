import axios from 'axios';

const token = localStorage.getItem('token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export function sendGetRequest(endpoint) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'GET',
    headers,
  });
}

export function sendPostRequest(endpoint) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'POST',
    headers,
  });
}

export function sendPutRequest(endpoint) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'PUT',
    headers,
  });
}
