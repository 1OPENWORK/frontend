const developer = true;

export const Ambiente = () => {
  if (developer) {
    return process.env.REACT_APP_MICROSERVICE_DEVELOPER;
  } else {
    return process.env.REACT_APP_MICROSERVICE_PRODUCAO;
  }
};
