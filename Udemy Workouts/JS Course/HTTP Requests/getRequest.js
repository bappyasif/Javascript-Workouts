let httpRequest = new XMLHttpRequest();
let apiURL = "https://jsonplaceholder.typicode.com/users";
let method = "GET";
httpRequest.open(method, apiURL);
httpRequest.onreadystatechange = () => {
  if (
    httpRequest.readyState === XMLHttpRequest.DONE &&
    httpRequest.status === 200
  ) {
    // console.log(httpRequest.response);
    console.log(JSON.parse(httpRequest.response));
  } else if (
    httpRequest.readyState === XMLHttpRequest.DONE &&
    httpRequest.status !== 200
  ) {
    console.log("Somethings Wrong");
  }
};
httpRequest.send();
