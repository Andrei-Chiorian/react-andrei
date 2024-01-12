const BASE_URL = 'http://127.0.0.1:5000';



export async function get(path) {
    try {
    return await fetch(BASE_URL + path, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }
    });
  } catch (error) {
    console.log(error);
  }
    
}

export async function post(path, data) {
    try {
    return await fetch(BASE_URL + path, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      'body': JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
    
}

export function put(path, data) {
  return fetch(BASE_URL + path, {
      method: "PUT",
      headers: {"Content-type": "application/json;charset=UTF-8"},
      'body':JSON.stringify(data)
    }).catch(error => {
      console.log(error)
  })
  
}

export function del(path, id) {
  return fetch(BASE_URL + path + id, {
      method: "DELETE",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    }).catch(error => {
      console.log(error)
  })
  
}