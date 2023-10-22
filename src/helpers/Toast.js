import { toast } from "react-toastify";

export const ToastSuccess = ({ title }) => {
  toast.success(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: false,
    theme: "light",
  });
};

export const ToastError = ({ title }) => {
  toast.error(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: false,
    theme: "light",
  });
};
