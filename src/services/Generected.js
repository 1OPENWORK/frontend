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


export async function post(uri, body){
  return await axios.post(uri, 
    body
  ).then((dados) => {
      return dados;
  }).catch((error) => {
    console.log(error);
  })

}
