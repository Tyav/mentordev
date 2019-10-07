import axios from 'axios';
import { readCookie } from '../helper/cookie'

const token = readCookie('mentordev_token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export function sendGetRequest(endpoint) {
  return axios({
    url: `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
    method: 'GET',
    headers,
  });
}

export function sendPostRequest(endpoint) {
  return axios({
    url: `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
    method: 'POST',
    headers,
  });
}

export function sendPutRequest(endpoint) {
  return axios({
    url: `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
    method: 'PUT',
    headers,
  });
}

export function sendDeleteRequest(endpoint) {
  return axios({
    url: `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
    method: 'DELETE',
    headers,
  });
}