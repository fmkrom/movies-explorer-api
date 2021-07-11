import  URL from '../constants';

async function register(name, email, password){
  try {
      const result = await fetch(`${URL.MY_BASE}/signup`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }, body: JSON.stringify({name, email, password})
      })
      
      if (result.ok){
        const res = await result.json();
        console.log(res);
        return res;
      } else if (!result.ok){
        console.log(result.status);
        return result.status
      }
    } catch (err) {
      console.log(err);
    }
};

async function login(email, password){
  try {
      const result = await fetch(`${URL.MY_BASE}/signin`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }, body: JSON.stringify({email, password})
      })
    
      if (result.ok){
        const res = await result.json();
        const jwt = res.jwt;
        localStorage.setItem('jwt', jwt);
        return jwt;
      } else if (!result.ok){
        return result.status
      }
    } catch (err) {
      console.log(err);
    }
};

export function getContent(token){
  return fetch(`${URL.MY_BASE}/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  }).then((res)=>{
    return res.json();
  }).then((data)=>{
    return data;
  })
  .catch((err)=>{
    console.log(err);
  })
};

const auth = {
    register, 
    login,
    getContent
}

export default auth;

/*
Старые варианты функций:

export function login(email, password){
    fetch(`${URL.MY_BASE}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({email, password})
    }).then((res)=>{
      if (res.ok) {
        return res.json();
      }
    }).then((data)=>{
        localStorage.setItem('jwt', data.jwt);
        return data.jwt;
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  };
  */
  /*
  then(checkRes)
  .then((data)=>{
    localStorage.setItem('jwt', data.jwt);
    return data.jwt;
  })
};*/

/*function checkRes(res) {
    if (res.ok) {
        console.log(`Res in checkRes: ${res}`);
        console.log(res);
        return res.json();
    } else {
      console.log(res);  
      // console.log(`Ошибка: ${res}`);  
      Promise.reject(`Ошибка: ${res.statusText}`);
      return res.json();
    }
}*/

/*export function register(name, email, password){  
  return fetch(`${URL.MY_BASE}/signup`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({name, email, password})
  }).then((res)=>{
    if (res.ok) {
      return res.json();
    } 
  }).catch((err)=>{
    console.log(err);
    return err;
  })
};*/

