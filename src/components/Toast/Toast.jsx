import toast from "react-hot-toast";

export const useToast = () => {
  const success = () =>
    toast.success("Operation Success", {
      duration: 2000,
      position: "top-right",
    });
  const error = () =>
    toast.error("Error in operation", {
      duration: 2000,
      position: "top-right",
    });
  return { successToast: success, errorToast: error };
};
