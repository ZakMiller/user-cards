import store from "@/store";

const AlertService = {
  alert(message: string, error?: boolean) {
    store.set("snackbar/type", error ? "error" : "success");
    store.set("snackbar/text", message);
    store.set("snackbar/snackbar", true);
  },
};

export default AlertService;
