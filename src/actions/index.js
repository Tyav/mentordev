import axios from 'axios';

export function sendGetRequest(endpoint, headers) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'GET',
    headers,
  });
}

export function sendPostRequest(endpoint, headers) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'POST',
    headers,
  });
}

export function sendPutRequest(endpoint, headers) {
  return axios({
    url: `http://localhost:6060${endpoint}`,
    method: 'PUT',
    headers,
  });
}
