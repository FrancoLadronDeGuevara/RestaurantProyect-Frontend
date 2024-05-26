import Swal from "sweetalert2";

export const customAlert = (title, action = null) => {
  Swal.fire({
    title: `<div><span class="text-custom-modal">${title}</span></div>`,
    showCancelButton: true,
    confirmButtonColor: "#3085D6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Aceptar",
    buttonsStyling: false,
    customClass: {
      container: "custom-container",
      popup: "alert-custom",
      confirmButton: "custom-confirm-button",
      cancelButton: "custom-cancel-button"
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === "function") {
        action();
      }
    }
  });
};

export const autoCloseAlert = (title, type) => {
  Swal.fire({
    position: "bottom",
    title: `<div class="text-modal-container"><span class="text-${type}-modal">${title}</span></div>`,
    color: "black",
    showConfirmButton: false,
    toast: true,
    width: 300,
    timer: 2000,
    background: "#333333",
    customClass: {
      container: "alert-container",
      popup: type,
    },
  });
};