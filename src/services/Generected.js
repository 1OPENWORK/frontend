import axiosInstance from "./Axios";


export async function get(uri) {
  return await axiosInstance
    .get(uri)
    .then((dados) => {
      return dados;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function post(uri, body) {
  return await axiosInstance
    .post(uri, body)
    .then((dados) => {
      return dados;
    })
    .catch((error) => {
      return error;
    });
}

export async function postImage(uri, body) {
  try {
    const response = await axiosInstance.post(uri, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um código de status diferente de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // A solicitação foi feita, mas nenhuma resposta foi recebida
      console.log(error.request);
    } else {
      // Algo aconteceu ao configurar a solicitação que desencadeou um erro
      console.log("Erro", error.message);
    }
    console.log(error.config);
  }
}

export async function getImagem(uri) {
  return await axiosInstance
    .get(uri, {
      responseType: "blob",
    })
    .then((dados) => {
      return dados;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function put(uri, body) {
  return await axiosInstance
    .put(uri, body)
    .then((dados) => {
      return dados;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function patch(uri) {

  return await axiosInstance
    .patch(uri)
    .then((dados) => {
      return dados;
    })
    .catch((error) => {
      console.log(error);
    });
}


