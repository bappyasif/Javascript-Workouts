let httpRequest = new XMLHttpRequest();
let apiURL = "https://jsonplaceholder.typicode.com/users";
let method = "POST";
let db = JSON.stringify({ name: "Jordyn", userName: "jordyJones" });
httpRequest.open(method, apiURL);
httpRequest.setRequestHeader("Content-type", "application/json");
httpRequest.onreadystatechange = () => {
  if (
    httpRequest.readyState === XMLHttpRequest.DONE &&
    httpRequest.status === 201
  ) {
    // console.log(httpRequest.response);
    console.log(JSON.parse(httpRequest.response));
  } else if (
    httpRequest.readyState === XMLHttpRequest.DONE &&
    httpRequest.status !== 201
  ) {
    console.log("Somethings Wrong");
  }
};
httpRequest.send(db);
