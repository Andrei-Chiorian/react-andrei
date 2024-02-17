import axios from 'axios';
import {API_AUTH_PATH, API_BASE_URL} from '../constants/apiPath';



export async function get(path) {
    try {
    return await fetch(API_BASE_URL + path, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }
    });
  } catch (error) {
    console.log(error);
  }
    
}

export  function post(path, data) {
    try {
    return axios.post(API_BASE_URL + path, data,
      {
          headers: { "Content-type": "application/json;charset=UTF-8" }
      } 
    )
    .then()
  } catch (error) {
    return error;
  }
    
}

export  function patch(path, data) {  
  try {
    return fetch(API_BASE_URL + path, {
      method: "PATCH",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      'body': JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
  
}

export function del(path, id) {
  try {
    return fetch(API_BASE_URL + path + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json;charset=UTF-8" }
    });
  } catch (error) {
    console.log(error);
  }
  
}

export  function getToken(data) {
    try {
        return axios.post(API_BASE_URL + API_AUTH_PATH, data,
        {
          headers: { "Content-type": "application/json;charset=UTF-8" }
        } 
        )
        .then()
    }
    catch (error) {
        return error;
    }  
}