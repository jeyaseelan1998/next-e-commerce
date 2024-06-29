import { showToast, toastTypes } from "@/helpers/toast";
import axios from "axios";

export const submitLoginDetails = async (userDetails) => {
  try {
    const response = await axios.post("https://livecountry-us.backendless.app/CC357C16-532F-456F-8D54-13FB8020F10F/92B3FE5D-1DEC-4CA9-8466-D1783D5910CE/api/users/register", userDetails);
    return response;
  } catch (error) {
    showToast(error.message, toastTypes.error);
  }
};
