import axios from 'axios';
import { AmbienteBackend } from '../hooks/Ambiente';
import store from '../store/store'; // Importe sua store diretamente

// Função para obter o token de autenticação
function getAuthToken() {
  const state = store.getState(); // Obtenha o estado Redux
  return state.auth.token; // Substitua 'auth' pelo nome do seu reducer de autenticação
}

// Crie uma instância do Axios com as configurações desejadas
const axiosInstance = axios.create({
  baseURL: AmbienteBackend(), // Substitua pela URL da sua API
  timeout: 5000, // Tempo limite da solicitação (opcional)
});

// Adicione um interceptor para configurar o cabeçalho Bearer
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // Obtenha o token de autenticação
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
