/** @format */

type ApiParams = {
  l: string;
  result: Promise<any>;
};

// function api() {
//   fetch("https://api.github.com/users/yh919").then((result) => {
//     console.log(result);
//     let apiData = result.json();
//     console.log(apiData);
//     return apiData;
//   });
// }
function api() {
  fetch("https://api.github.com/users/yh919")
    .then((result) => {
      let myData = result.json();
      return myData;
    })
    .then((full) => {
      return full;
    })
    .then((data) => {
      return `https://github.com/users/${data.login}`;
    });
}

// function api() {
//   const apiData = JSON.stringify("api.github.com/users/yh919");
//   console.log(apiData);
// }

export default api;
