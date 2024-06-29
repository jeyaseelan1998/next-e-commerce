import { Slide, toast } from "react-toastify";

export const toastTypes = {
    error: "error",
    info: "info",
    success: "success",
    warning: "warning",
}

export const toastTheme = {
    light: "light",
    dark: "dark"
}

export const showToast = (message, type, theme = "dark") => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
    transition: Slide,
  };

  toast[type](message, options);
};
