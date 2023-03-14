import axios from "axios";

export async function get(uri) {
  return await axios
    .get(uri)
    .then((dados) => {
      return dados;
    })
    .catch((err) => {
      console.log(err);
    });
}
