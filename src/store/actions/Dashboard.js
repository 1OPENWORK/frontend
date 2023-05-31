import { get, post } from "../../services/Generected";

const URI = "http://localhost:8004/api";

export const handleDashboard = async () => {
  return await get(`${URI}/dashboard`);
};


export const handleFinanceTable = async (id) => {
    return await get(`${URI}/dashboard/tableFinance/${id}`)
}

export const handleProjectsCompleted = async(id) =>{
  return await get(`${URI}/dashboard/projetos-completed/${id}`)
}
export const handleProjectsInProgress = async(id) =>{
  return await get(`${URI}/dashboard/projetos-progress/${id}`)
}
export const handleProjectsCancelled = async(id) =>{
  return await get(`${URI}/dashboard/projetos-cancelled/${id}`)
}