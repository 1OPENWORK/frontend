const developer = false;

export const Ambiente = () => {
  if (developer) {
    return process.env.REACT_APP_MICROSERVICE_DEVELOPEING;
  } else {
    return process.env.REACT_APP_MICROSERVICE_PRODUCAO;
  }
};

export const AmbienteBackend = () => {
  if (developer) {
    return process.env.REACT_APP_BACKEND_LOCAL_HOST_DEVELOPEING;
  } else {
    return process.env.REACT_APP_BACKEND_LOCAL_HOST;
  }
}
