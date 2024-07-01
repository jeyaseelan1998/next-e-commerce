import { showToast, toastTypes } from "@/helpers/toast";
import axios from "axios";

const baseUrl = "https://e-commerce-backend-spqg.onrender.com";

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
