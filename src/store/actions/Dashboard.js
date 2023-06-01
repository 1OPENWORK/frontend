import { AmbienteBackend } from "../../hooks/Ambiente";
import { get } from "../../services/Generected";

export const handleDashboard = async () => {
  return await get(AmbienteBackend() + `/api/dashboard`);
};

export const handleFinanceTable = async (id) => {
  return await get(AmbienteBackend() + `/api/dashboard/tableFinance/${id}`);
};

export const handleProjectsCompleted = async (id) => {
  return await get(
    AmbienteBackend() + `/api/dashboard/projetos-completed/${id}`
  );
};
export const handleProjectsInProgress = async (id) => {
  return await get(
    AmbienteBackend() + `/api/dashboard/projetos-progress/${id}`
  );
};
export const handleProjectsCancelled = async (id) => {
  return await get(
    AmbienteBackend() + `/api/dashboard/projetos-cancelled/${id}`
  );
};
