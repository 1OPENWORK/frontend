import { AmbienteBackend } from "../../hooks/Ambiente";
import { get } from "../../services/Generected";

export const handleDashboard = async () => {
  return await get(AmbienteBackend() + `/dashboard`);
};

export const handleFinanceTable = async (id) => {
  return await get(AmbienteBackend() + `/dashboard/tableFinance/${id}`);
};

export const handleProjectsCompleted = async (id) => {
  return await get(AmbienteBackend() + `/dashboard/projetos-completed/${id}`);
};
export const handleProjectsInProgress = async (id) => {
  return await get(AmbienteBackend() + `/dashboard/projetos-progress/${id}`);
};
export const handleProjectsCancelled = async (id) => {
  return await get(AmbienteBackend() + `/dashboard/projetos-cancelled/${id}`);
};
