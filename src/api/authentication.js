import { showToast, toastTypes } from "@/helpers/toast";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_APP_API || process.env.BACKEND_APP_API || `http://localhost:3000`;

export const submitUserLoginDetails = async (userDetails) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, userDetails);
    return response;
  } catch (error) {
    showToast(error?.response?.data || error.message, toastTypes.error);
  }
};

export const submitUserRegisterationDetails = async (userDetails) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, userDetails);
    return response;
  } catch (error) {
    showToast(error?.response?.data || error.message, toastTypes.error);
  }
};
