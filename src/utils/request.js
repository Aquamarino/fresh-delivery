import {SHA1} from "./SHA1";

const AppId = "A6053788184630";
const AppKey = "8B3F5860-2646-2C47-DC50-39106919B260";
var now = Date.now();
const secureAppKey = SHA1(AppId+"UZ"+AppKey+"UZ"+now)+"."+now;

function handleResponse(url, response) {
  if(response.status < 500){
    return response.json();
  }else{
    console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
    return {error: {message: "Request failed due to server error "}};
  }
}

function getHeader(){
  let id=sessionStorage.getItem('userId');
  if(id===undefined||null){id="114514";}
  let name=sessionStorage.getItem('username');
  if(name===undefined||null){name="anonymous"};
  let date=Date.now;
  return new Headers({
      "UserId":id,
      "Username":name,
      "Date":date,
      "X-APICloud-AppId": AppId,
      "X-APICloud-AppKey": secureAppKey,
      "Accept": "application/json",
      "Content-Type": "application/json"
  });
}

function getData(url, present){

  let id=sessionStorage.getItem('userId');
  if(id===undefined){id="114514";}
  let name=sessionStorage.getItem('username');
  if(name===undefined){name="anonymous"};
  let date=Date.now;

  return fetch(url, {
    method: "GET",
    headers: new Headers({
      "UserId":id,
      "Username":name,
      "Date":date,
      "X-APICloud-AppId": AppId,
      "X-APICloud-AppKey": secureAppKey,
      "context":present,
  }),

  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return {error: {message: "Request failed."}};
  })
}




function postData(url, data) {
  let id=sessionStorage.getItem('userId');
  if(id===undefined){id="114514";}
  let name=sessionStorage.getItem('username');
  if(name===undefined){name="anonymous"};
  let date=Date.now;
  return fetch(url, {
    method: "POST",
    headers: new Headers({
      "UserId":id,
      "Username":name,
      "Date":date,
      "X-APICloud-AppId": AppId,
      "X-APICloud-AppKey": secureAppKey,
      "Accept": "application/json",
  }),
    body: data
  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return {error: {message: "Request failed."}};
  })
}


function postJSON(url, data) {
  return fetch(url, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(data)
  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return {error: {message: "Request failed."}};
  })
}

function postPic(url, data) {
  let id=sessionStorage.getItem('userId');
  if(id===undefined){id="114514";}
  let name=sessionStorage.getItem('username');
  if(name===undefined){name="anonymous"};
  let date=Date.now;
  return fetch(url, {
    method: "POST",
    headers: new Headers({
      "UserId":id,
      "Username":name,
      "Date":date,
      "X-APICloud-AppId": AppId,
      "X-APICloud-AppKey": secureAppKey,
      "Accept": "application/json",
  }),
    body: data
  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return {error: {message: "Request failed."}};
  })
}


export {postData, postPic, postJSON, getData}