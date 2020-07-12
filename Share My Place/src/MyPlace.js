import { Map } from "./UI/Map";
import sanitizeHTML from "sanitize-html";
class LoadedClass {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.innerHTML = sanitizeHTML(address);
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
// console.log(url.href);
// const coords = {
//     lat:parseFloat(queryParams.get("lat")),
//     lng:+queryParams.get("lng"),
// }
// const address = queryParams.get("address");
const locId = queryParams.get("location");
fetch("http://localhost:3000/location/" + locId)
  .then((res) => {
    if (res.status === 404) {
      throw new Error("Could not find location!");
    }
    return res.json();
  })
  .then((data) => {
    new LoadedClass(data.coordinates, data.address);
  })
  .catch((err) => {
    alert(err.message);
  });
