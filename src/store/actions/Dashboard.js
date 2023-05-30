import { get, post } from "../../services/Generected";

const URI = "http://localhost:8004/api";

export const handleDashboard = async () => {
  return await get(`${URI}/dashboard`);
};


export const handleFinanceTable = async (id) => {
    return await get(`${URI}/dashboard/tableFinance/${id}`)
}